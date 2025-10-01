// backend/models/Course.js
import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, default: "" },
  videoUrl: { type: String, default: "" },
  duration: { type: Number, default: 0 }
}, { timestamps: true });

const ModuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  lessons: { type: [LessonSchema], default: [] },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  category: { type: String, default: "" },
  difficulty: { type: String, enum: ["Beginner","Intermediate","Advanced",""], default: "" },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  modules: { type: [ModuleSchema], default: [] },
  published: { type: Boolean, default: false },
  publishedAt: { type: Date, default: null },
  enrollmentCount: { type: Number, default: 0 },
  completionRate: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

CourseSchema.index({ instructor: 1 });

const Course = mongoose.model("Course", CourseSchema);
export default Course;
