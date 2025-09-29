import React from "react";

// CourseProgress.jsx
// Single-file React component built with Tailwind CSS.
// Default export a component that renders the dashboard shown in the supplied image.

const ProgressTracking = () => {
  const overall = 75;

  const modules = [
    { id: 1, title: "Module 1: Introduction to Data Science", status: "Completed", progress: 100 },
    { id: 2, title: "Module 2: Data Analysis Techniques", status: "In Progress", progress: 50 },
    { id: 3, title: "Module 3: Machine Learning Fundamentals", status: "Not Started", progress: 0 },
  ];

  const assessments = [
    { id: 1, title: "Quiz 1: Data Science Basics", type: "Quiz", score: "85/100", status: "Passed" },
    { id: 2, title: "Assignment 1: Data Analysis Project", type: "Assignment", score: "92/100", status: "Submitted" },
    { id: 3, title: "Quiz 2: Advanced Techniques", type: "Quiz", score: "Pending", status: "Not Started" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center text-white font-bold">E</div>
            <div className="font-semibold">EduLearn</div>
          </div>
          <nav className="hidden md:flex gap-8 items-center text-sm text-slate-600">
            <a href="#">My Courses</a>
            <a href="#">Catalog</a>
            <a href="#">Instructors</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-md hover:bg-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
              </svg>
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 flex items-center justify-center text-white text-sm">LN</div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Course Progress</h1>
        <p className="text-slate-500 mb-8">Track your progress and performance in the course</p>

        {/* Overall progress */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-slate-700">Overall Progress</h3>
              <div className="mt-3 w-96 max-w-full">
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="h-3 rounded-full bg-blue-500" style={{ width: `${overall}%` }} />
                </div>
                <p className="mt-3 text-sm text-slate-500">You&apos;re doing great! Keep up the momentum.</p>
              </div>
            </div>
            <div className="text-slate-600 font-semibold">{overall}%</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            {/* Module breakdown */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Module Breakdown</h2>
              <div className="space-y-4">
                {modules.map((m) => (
                  <div key={m.id} className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700">{m.title}</div>
                        <div className="text-sm text-slate-500">{m.status}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-40">
                        <div className="h-2 bg-slate-100 rounded-full">
                          <div className={`h-2 rounded-full ${m.progress >= 50 ? 'bg-blue-500' : 'bg-slate-300'}`} style={{ width: `${m.progress}%` }} />
                        </div>
                      </div>
                      <div className="text-sm text-slate-600 font-semibold">{m.progress}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment results */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Assessment Results</h2>
              <div className="bg-white rounded-lg border border-slate-100 overflow-hidden">
                <table className="w-full table-fixed">
                  <thead className="bg-slate-50 text-slate-600 text-sm">
                    <tr>
                      <th className="text-left p-4 w-3/5">Assessment</th>
                      <th className="text-left p-4">Type</th>
                      <th className="text-left p-4">Score</th>
                      <th className="text-left p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assessments.map((a) => (
                      <tr key={a.id} className="border-t border-slate-100">
                        <td className="p-4 text-sm text-slate-700">{a.title}</td>
                        <td className="p-4 text-sm text-slate-500">{a.type}</td>
                        <td className="p-4 text-sm text-slate-500">{a.score}</td>
                        <td className="p-4 text-sm">
                          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">{a.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Performance Charts</h2>
            <div className="bg-white rounded-lg border border-slate-100 p-6 mb-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-500">Overall Performance</div>
                  <div className="text-3xl font-bold">88%</div>
                  <div className="text-sm text-slate-500">Last 3 Months <span className="text-emerald-500 font-medium">+5%</span></div>
                </div>
                <div className="text-sm text-slate-400">Week 1 - 6</div>
              </div>

              {/* Simple SVG sparkline to mimic the chart */}
              <div className="w-full h-48">
                <svg viewBox="0 0 600 160" className="w-full h-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopOpacity="0.12" stopColor="#2563EB" />
                      <stop offset="100%" stopOpacity="0" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                  <path d="M10 120 C50 60, 90 80, 130 120 C170 150, 210 100, 250 100 C290 100, 330 110, 370 60 C410 10, 450 20, 490 120 C530 150, 570 120, 590 90" stroke="#2563EB" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="mt-4 grid grid-cols-6 text-xs text-slate-400">
                <div className="text-center">Week 1</div>
                <div className="text-center">Week 2</div>
                <div className="text-center">Week 3</div>
                <div className="text-center">Week 4</div>
                <div className="text-center">Week 5</div>
                <div className="text-center">Week 6</div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-100 p-4 shadow-sm">
              <h3 className="font-medium mb-2">Certificate Eligibility</h3>
              <p className="text-sm text-slate-500 mb-4">You are eligible for a course completion certificate upon finishing all modules and passing all assessments.</p>
              <div className="text-right">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">View Certificate</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-slate-500 text-sm text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-6">
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Contact Us</a>
              </div>
              <div>@2024 EduLearn. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default ProgressTracking