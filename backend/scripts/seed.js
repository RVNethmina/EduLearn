// backend/scripts/seed.js
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import connectDB from "../config/mongodb.js";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";
import Activity from "../models/Activity.js";
import Announcement from "../models/Announcement.js";

const run = async () => {
  try {
    await connectDB();

    await User.deleteMany({});
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    await Activity.deleteMany({});
    await Announcement.deleteMany({});

    const salt = await bcrypt.genSalt(10);
    const instructorPass = await bcrypt.hash("Instructor123", salt);
    const instructor = await User.create({ name: "Sarah Instructor", email: "sarah@edu.com", password: instructorPass, role: "instructor" });

    const students = [];
    for (let i=1;i<=8;i++){
      const h = await bcrypt.hash(`student${i}`, 10);
      students.push(await User.create({ name: `Student ${i}`, email: `student${i}@edu.com`, password: h, role: "student" }));
    }

    const c1 = await Course.create({
      title: "Introduction to Graphic Design",
      description: "Basics of design",
      instructor: instructor._id,
      enrollmentCount: 45,
      completionRate: 75,
      modules: [
        { title: "Basics", description: "Intro", lessons: [{ title: "Lesson 1", content: "..." }], order: 1 },
        { title: "Tools", description: "Using tools", lessons: [], order: 2 }
      ]
    });

    const c2 = await Course.create({
      title: "Advanced Photography Techniques",
      description: "Pro tips",
      instructor: instructor._id,
      enrollmentCount: 30,
      completionRate: 90,
      modules: [{ title: "Camera Settings", description: "", lessons: [], order: 1 }]
    });

    for (const s of students) {
      await Enrollment.create({ student: s._id, course: c1._id, status: "active", grade: null });
      await Enrollment.create({ student: s._id, course: c2._id, status: "active", grade: Math.random() > 0.5 ? Math.floor(Math.random()*30)+70 : null });
    }
    const now = new Date();
    for (let w=0; w<4; w++) {
      const d = new Date(); d.setDate(now.getDate() - (w*7));
      await Activity.create({ course: c1._id, date: d, activityCount: Math.floor(Math.random()*100) });
      await Activity.create({ course: c2._id, date: d, activityCount: Math.floor(Math.random()*80) });
    }

    await Announcement.create({ title: "Welcome!", body: "Good luck this term", author: instructor._id });

    console.log("Seed complete. Instructor login: sarah@edu.com / Instructor123");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
