// backend/controllers/dashboardController.js
import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";
import Activity from "../models/Activity.js";
import mongoose from "mongoose";

export const getInstructorDashboard = async (req, res) => {
  try {
    const instructorId = req.user._id;
    const courses = await Course.find({ instructor: instructorId });
    const totalCourses = courses.length;
    const courseIds = courses.map(c => c._id);

    // unique active students
    const activeEnrollments = await Enrollment.find({ course: { $in: courseIds }, status: "active" }).select("student");
    const uniqueActiveStudents = new Set(activeEnrollments.map(e => e.student.toString())).size;

    // pending grades
    const pendingGrades = await Enrollment.countDocuments({ course: { $in: courseIds }, grade: null });

    // avg completion rate
    const avgCompletionRate = courses.length ? Math.round(courses.reduce((s, c) => s + (c.completionRate || 0), 0) / courses.length) : 0;

    // course summary
    const courseSummary = await Promise.all(courses.map(async c => {
      const enrollCount = await Enrollment.countDocuments({ course: c._id });
      return {
        id: c._id,
        title: c.title,
        enrollment: enrollCount,
        completionRate: c.completionRate || 0,
        lastUpdated: c.lastUpdated
      };
    }));

    // engagement last 4 weeks
    const fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - (7 * 4));
    const activities = await Activity.aggregate([
      { $match: { course: { $in: courseIds.map(id => mongoose.Types.ObjectId(id)) }, date: { $gte: fourWeeksAgo } } },
      { $project: { week: { $dateToString: { format: "%Y-%U", date: "$date" } }, activityCount: 1 } },
      { $group: { _id: "$week", total: { $sum: "$activityCount" } } },
      { $sort: { _id: 1 } }
    ]);

    const engagement = activities.map(a => ({ week: a._id, activity: a.total }));

    res.json({
      totalCourses,
      activeStudents: uniqueActiveStudents,
      pendingGrades,
      avgCompletionRate,
      courses: courseSummary,
      engagement
    });
  } catch (err) {
    console.error("getInstructorDashboard error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
