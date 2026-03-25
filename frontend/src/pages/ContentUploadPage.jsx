import React, { useState } from "react";
import {
  LayoutGrid,
  List,
  Settings,
  Users,
  Star,
  Play,
  Edit,
  ArrowLeft,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

// Single-file React + Tailwind page for a "Course Curriculum" UI
// Usage: drop this file into your project (e.g. src/pages/CourseCurriculumPage.jsx)
// Requires: lucide-react, framer-motion, and Tailwind CSS configured

const ContentUpload = () => {
  const [lessons, setLessons] = useState(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: ${lessonTitles[i] ?? "Untitled Lesson"}`,
      duration: i === 1 ? 15 : 10,
    }))
  );

  function addLesson() {
    const nextId = lessons.length + 1;
    setLessons([
      ...lessons,
      {
        id: nextId,
        title: `Lesson ${nextId}: New Lesson`,
        duration: 10,
      },
    ]);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white/90 border-r border-slate-200 p-6 flex flex-col">
        <div className="mb-8">
          <div className="text-xl font-extrabold">EduLearn</div>
        </div>

        <nav className="flex-1 space-y-3">
          <SidebarItem icon={<LayoutGrid size={18} />} label="Overview" />
          <SidebarItem icon={<List size={18} />} label="Curriculum" active />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
          <SidebarItem icon={<Users size={18} />} label="Students" />
          <SidebarItem icon={<Star size={18} />} label="Reviews" />
        </nav>

        <div className="mt-6 text-sm text-slate-500 flex items-center gap-2 cursor-pointer">
          <ArrowLeft size={16} /> <span>Go to course</span>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-12">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold leading-tight">Course Curriculum</h1>
          <p className="text-slate-500 mt-2">Organize your course content into sections and lessons. Drag and drop to reorder.</p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold mb-6">Module 1: Introduction to Data Science</h2>

          <div className="space-y-3">
            {lessons.map((lesson) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, translateY: 6 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white border">
                    <Play size={18} />
                  </div>
                  <div>
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-sm text-slate-500">{lesson.duration} min</div>
                  </div>
                </div>

                <button
                  aria-label={`Edit ${lesson.title}`}
                  className="p-2 rounded hover:bg-slate-100"
                  title="Edit"
                >
                  <Edit size={18} />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center">
            <button
              onClick={addLesson}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 text-white text-sm shadow-sm hover:opacity-95"
            >
              Add Lesson
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// small helper components + data
const SidebarItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
      active ? "bg-slate-100 font-semibold" : "text-slate-700 hover:bg-slate-50"
    }`}
  >
    <div className="opacity-90">{icon}</div>
    <div>{label}</div>
  </div>
);

const lessonTitles = [
  "What is Data Science?",
  "Tools for Data Science",
  "Data Science Workflow",
  "Data Science Ethics",
  "Data Science Resources",
  "Data Science Career Paths",
  "Data Science Trends",
  "Data Science Case Studies",
  "Data Science Challenges",
  "Data Science Future",
  "Data Science Quiz",
  "Data Science Assignment",
];


export default ContentUpload;