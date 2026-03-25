import React from "react";

export default function PaymentHistory() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* ===== Top Bar ===== */}
      <header className="flex items-center justify-between px-8 py-4 border-b bg-white shadow-sm">
        {/* Logo Slot */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <span className="font-bold text-lg">EduLearn</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Courses</a>
          <a href="#" className="hover:text-blue-600">Instructors</a>
          <a href="#" className="hover:text-blue-600">My learning</a>
          <a href="#" className="hover:text-blue-600">Wishlist</a>
          <a href="#" className="hover:text-blue-600">Shopping cart</a>
        </nav>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            🔔
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            {/* Profile image slot */}
          </div>
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="flex-grow px-8 py-6">
        <h1 className="text-2xl font-bold mb-6">Payment history</h1>

        {/* Tabs */}
        <div className="flex gap-8 border-b mb-4 text-sm font-medium">
          <button className="pb-2 border-b-2 border-gray-800 text-gray-800">
            Transactions
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800">
            Invoices
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800">
            Receipts
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6">
          {["All", "Paid", "Pending", "Refunded"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-1 rounded-lg border text-sm bg-gray-100 hover:bg-gray-200"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { date: "07/15/2023", desc: "Course: Advanced Data Science", amount: "$199.99", status: "Paid" },
                { date: "06/20/2023", desc: "Course: Machine Learning Fundamentals", amount: "$149.99", status: "Paid" },
                { date: "05/10/2023", desc: "Course: Python for Beginners", amount: "$99.99", status: "Paid" },
                { date: "04/05/2023", desc: "Subscription: Premium Plan", amount: "$29.99", status: "Paid" },
                { date: "03/15/2023", desc: "Course: Web Development Bootcamp", amount: "$249.99", status: "Refunded" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">{row.desc}</td>
                  <td className="px-6 py-4 text-blue-600">{row.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-md text-sm ${
                        row.status === "Paid"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="flex justify-between items-center px-8 py-6 text-sm text-gray-500">
        <div className="flex gap-6">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p>©2024 EduLearn. All rights reserved.</p>
        <a href="#">Contact Us</a>
      </footer>
    </div>
  );
}
