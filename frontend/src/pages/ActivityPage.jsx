import React from "react";

export default function ActivityPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* ===== Sidebar ===== */}
      <aside className="w-64 bg-white border-r flex flex-col">
        {/* Logo Slot */}
        <div className="p-6 flex items-center gap-2 border-b">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <span className="font-bold text-lg">EduLearn</span>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2 p-4 text-sm font-medium text-gray-700">
          {[
            "Dashboard",
            "Courses",
            "Users",
            "Analytics",
            "Activity",
            "Settings",
          ].map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 ${
                item === "Activity" ? "bg-gray-100 text-gray-900" : ""
              }`}
            >
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              {item}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto p-4 text-sm text-gray-600 flex flex-col gap-4">
          <button className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            Help and Docs
          </button>
          <button className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            Invite a colleague
          </button>
        </div>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 px-8 py-6">
        <h1 className="text-2xl font-bold mb-4">Activity</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6 text-sm font-medium">
          <button className="pb-2 border-b-2 border-gray-800 text-gray-800">
            All
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800">
            System
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800">
            User
          </button>
        </div>

        {/* Filters */}
        <section className="mb-6">
          <h2 className="text-sm font-medium mb-3">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <input
                key={i}
                type="text"
                placeholder="Filter..."
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            ))}
          </div>
        </section>

        {/* Activity Trends */}
        <section className="mb-6">
          <h2 className="text-sm font-medium mb-3">Activity Trends</h2>
          <div className="border rounded-lg bg-white p-6">
            <h3 className="text-sm font-medium mb-2">Activity Over Time</h3>
            <p className="text-2xl font-bold">1200</p>
            <p className="text-xs text-green-600 mb-4">
              Last 30 Days +15%
            </p>

            {/* Chart slot */}
            <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center">
              Chart Placeholder
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-6">
          <h2 className="text-sm font-medium mb-3">Recent Activity</h2>
          <div className="overflow-hidden border rounded-lg bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-6 py-3">Timestamp</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Activity Type</th>
                  <th className="px-6 py-3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  {
                    time: "2024-07-26 10:00",
                    user: "Ethan Carter",
                    type: "User Login",
                    details: "Successful login",
                  },
                  {
                    time: "2024-07-20 09:30",
                    user: "Olivia Bennett",
                    type: "Course Enrollment",
                    details: "Enrolled in 'Advanced Data Science'",
                  },
                  {
                    time: "2024-07-20 09:00",
                    user: "Liam Harper",
                    type: "Payment Transaction",
                    details: "Payment of $99.99 received",
                  },
                  {
                    time: "2024-07-20 08:50",
                    user: "Ava Morgan",
                    type: "User Login",
                    details: "Failed login attempt",
                  },
                  {
                    time: "2024-07-20 08:30",
                    user: "Noah Foster",
                    type: "Course Enrollment",
                    details: "Enrolled in 'Machine Learning Basics'",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{row.time}</td>
                    <td className="px-6 py-4">{row.user}</td>
                    <td className="px-6 py-4 text-blue-600">{row.type}</td>
                    <td className="px-6 py-4">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-3 px-4 py-2 text-sm border rounded-md bg-gray-100 hover:bg-gray-200">
            Export to CSV
          </button>
        </section>

        {/* Alerts */}
        <section>
          <h2 className="text-sm font-medium mb-3">Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-sm">Suspicious Login Activity</p>
                <p className="text-sm text-gray-600">
                  Multiple failed login attempts from a single IP address
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-sm">High Enrollment Rate</p>
                <p className="text-sm text-gray-600">
                  Unusually high number of course enrollments in a short period
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
