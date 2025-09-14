import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import { Bell } from "lucide-react";
const InstructorDashboard = () => {
  const data = [
    { week: "Week 1", activity: 40 },
    { week: "Week 2", activity: 20 },
    { week: "Week 3", activity: 70 },
    { week: "Week 4", activity: 50 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-4  bg-white shadow-sm ">
        <div className="font-bold text-lg">EduLearn</div>
        <nav className="space-x-6 text-gray-600 font-medium ml-100">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">My Courses</a>
          <a href="#" className="text-black">Calendar</a>
          <a href="#" className="text-black">Messages</a>
        </nav>
        <div className="flex items-center space-x-4">
         
{/* Notification Button */}
<button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
  <Bell className="w-5 h-5 text-gray-600" />
</button>
{/* User Profile Button */}
<button className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-blue-500 transition">
  <img
    src="https://i.pravatar.cc/100?img=5" // replace with logged-in user image URL
    alt="User Avatar"
    className="w-full h-full object-cover"
  />
</button>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="px-10 py-8">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-1">Instructor Dashboard</h1>
        <p className="text-blue-300 mb-10">
          Welcome back, Sarah! Here's an overview of your courses and student activity.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-200 hover:bg-gray-300 rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Total Courses</p>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Active Students</p>
            <p className="text-3xl font-bold">120</p>
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Pending Grades</p>
            <p className="text-3xl font-bold">15</p>
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Average Completion Rate</p>
            <p className="text-3xl font-bold">85%</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-lg  mb-3 font-bold">Quick Actions</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition font-bold">
              Create New Course
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition font-bold">
              Post Announcement
            </button>
          </div>
        </div>

        {/* Course Summary */}
        <div className="mb-12">
          <h2 className="text-lg  mb-4 font-bold">Course Summary</h2>
          <div className="border rounded-xl overflow-hidden bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="p-4">Course Title</th>
                  <th className="p-4">Enrollment</th>
                  <th className="p-4">Completion Rate</th>
                  <th className="p-4">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-4">Introduction to Graphic Design</td>
                  <td className="p-4">45</td>
                  <td className="p-4 flex items-center gap-3">
                    <div className="h-2 w-2/3 bg-blue-500 rounded"></div>
                    <span>75%</span>
                  </td>
                  <td className="p-4 text-gray-500 text-sm">2 weeks ago</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4">Advanced Photography Techniques</td>
                  <td className="p-4">30</td>
                  <td className="p-4 flex items-center gap-3">
                    <div className="h-2 w-5/6 bg-blue-500 rounded"></div>
                    <span>90%</span>
                  </td>
                  <td className="p-4 text-gray-500 text-sm">1 month ago</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4">Creative Writing Workshop</td>
                  <td className="p-4">45</td>
                  <td className="p-4 flex items-center gap-3">
                    <div className="h-2 w-1/2 bg-blue-500 rounded"></div>
                    <span>60%</span>
                  </td>
                  <td className="p-4 text-gray-500 text-sm">3 weeks ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Engagement */}
        <div>
          <h2 className="text-lg font-bold mb-4">Student Engagement</h2>
          <div className="bg-white border rounded-xl shadow-sm p-6">
            <p className="text-2xl font-bold text-green-600">+15%</p>
            <p className="text-sm text-gray-500 mb-4">Last 30 Days</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="week" />
                <Line
                  type="monotone"
                  dataKey="activity"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 pb-8">
        <div className="space-x-6 mb-3">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <p>@2024 EduLearn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InstructorDashboard;
