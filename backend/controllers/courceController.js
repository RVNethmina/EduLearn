// backend/controllers/courseController.js
import Course from "../models/Course.js";
import mongoose from "mongoose";

/* Get course with modules & lessons (instructor only) */
export const getCourseDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid course id" });

    const course = await Course.findById(id).populate("instructor", "name email");
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (course.instructor._id.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(course);
  } catch (err) {
    console.error("getCourseDetails error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* Update course metadata */
export const updateCourseMeta = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, difficulty } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid course id" });

    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin")
      return res.status(403).json({ message: "Not allowed" });

    if (title !== undefined) course.title = title;
    if (description !== undefined) course.description = description;
    if (category !== undefined) course.category = category;
    if (difficulty !== undefined) course.difficulty = difficulty;

    course.lastUpdated = Date.now();
    await course.save();
    res.json(course);
  } catch (err) {
    console.error("updateCourseMeta error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* Add module */
export const addModule = async (req, res) => {
  try {
    const { id } = req.params;
    const { title = "New Module", description = "" } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid course id" });

    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin")
      return res.status(403).json({ message: "Not allowed" });

    const newOrder = course.modules.length ? Math.max(...course.modules.map(m => m.order)) + 1 : 1;
    const module = { title, description, lessons: [], order: newOrder };
    course.modules.push(module);
    course.lastUpdated = Date.now();
    await course.save();

    const createdModule = course.modules[course.modules.length - 1];
    res.status(201).json(createdModule);
  } catch (err) {
    console.error("addModule error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* Update module */
export const updateModule = async (req, res) => {
  try {
    const { id, moduleId } = req.params;
    const { title, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(moduleId))
      return res.status(400).json({ message: "Invalid id" });

    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin")
      return res.status(403).json({ message: "Not allowed" });

    const module = course.modules.id(moduleId);
    if (!module) return res.status(404).json({ message: "Module not found" });

    if (title !== undefined) module.title = title;
    if (description !== undefined) module.description = description;

    course.lastUpdated = Date.now();
    await course.save();
    res.json(module);
  } catch (err) {
    console.error("updateModule error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* Delete module */
export const deleteModule = async (req, res) => {
  try {
    const { id, moduleId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(moduleId))
      return res.status(400).json({ message: "Invalid id" });

    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin")
      return res.status(403).json({ message: "Not allowed" });

    const module = course.modules.id(moduleId);
    if (!module) return res.status(404).json({ message: "Module not found" });

    module.remove();

    // re-order
    course.modules = course.modules
      .sort((a, b) => a.order - b.order)
      .map((m, idx) => { m.order = idx + 1; return m; });

    course.lastUpdated = Date.now();
    await course.save();
    res.json({ message: "Module deleted" });
  } catch (err) {
    console.error("deleteModule error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* Reorder modules */
export const reorderModules = async (req, res) => {
  try {
    const { id } = req.params;
    const { order } = req.body; // array of module ids
    if (!Array.isArray(order)) return res.status(400).json({ message: "Order must be array" });
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid course id" });

    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin")
      return res.status(403).json({ message: "Not allowed" });

    const modulesById = new Map(course.modules.map(m => [m._id.toString(), m]));
    const newModules = [];
    let next = 1;
    for (const mid of order) {
      const m = modulesById.get(mid);
      if (m) {
        m.order = next++;
        newModules.push(m);
        modulesById.delete(mid);
      }
    }
    // append remaining
    for (const [_, m] of modulesById) {
      m.order = next++;
      newModules.push(m);
    }

    course.modules = newModules;
    course.lastUpdated = Date.now();
    await course.save();
    res.json(course.modules);
  } catch (err) {
    console.error("reorderModules error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* Publish/unpublish */
export const setPublishState = async (req, res) => {
  try {
    const { id } = req.params;
    const { publish } = req.body;
    if (typeof publish !== "boolean") return res.status(400).json({ message: "publish must be boolean" });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid course id" });
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin")
      return res.status(403).json({ message: "Not allowed" });

    course.published = publish;
    course.publishedAt = publish ? Date.now() : null;
    course.lastUpdated = Date.now();
    await course.save();
    res.json({ published: course.published, publishedAt: course.publishedAt });
  } catch (err) {
    console.error("setPublishState error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
