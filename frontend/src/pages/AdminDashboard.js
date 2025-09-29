import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <ul className="space-y-4">
          <li
            onClick={() => setActiveTab("overview")}
            className={`cursor-pointer p-2 rounded ${activeTab === "overview" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            Overview
          </li>
          <li
            onClick={() => setActiveTab("users")}
            className={`cursor-pointer p-2 rounded ${activeTab === "users" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            Manage Users
          </li>
          <li
            onClick={() => setActiveTab("courses")}
            className={`cursor-pointer p-2 rounded ${activeTab === "courses" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            Manage Courses
          </li>
          <li
            onClick={() => setActiveTab("payments")}
            className={`cursor-pointer p-2 rounded ${activeTab === "payments" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            Payments
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">👩‍🎓 1200 Students</div>
              <div className="bg-white p-6 rounded-lg shadow">📚 80 Courses</div>
              <div className="bg-white p-6 rounded-lg shadow">💰 $25,000 Revenue</div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
            <table className="w-full bg-white shadow rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">1</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Student</td>
                  <td className="p-3">
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "courses" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold">React Basics</h2>
                <p>Instructor: Jane Smith</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold">Node.js Mastery</h2>
                <p>Instructor: Alex Johnson</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "payments" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Payment Records</h1>
            <table className="w-full bg-white shadow rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Transaction ID</th>
                  <th className="p-3">User</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">TXN12345</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">$49</td>
                  <td className="p-3 text-green-600 font-bold">Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
