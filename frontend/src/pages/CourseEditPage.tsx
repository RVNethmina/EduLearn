import React from "react";
import { Pencil } from "lucide-react";
import { Bell } from "lucide-react";

const CourseEditPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      {/* Main Content */}
      <main className="flex-1 px-6 py-10 max-w-4xl mx-auto ml-50">
        <h2 className="text-2xl font-bold mb-1">
          Edit Course: Advanced Photography Techniques
        </h2>
        <p className="text-blue-400 mb-6">
          Update your course content, add or remove modules/lessons, and publish
          changes.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Course Title</label>
            <input
              type="text"
              className="w-full  rounded-lg p-2 bg-gray-200 hover:bg-gray-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Course Description</label>
            <textarea
              rows={4}
              className="w-full  rounded-lg p-2 bg-gray-200 hover:bg-gray-300"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              className="w-full  rounded-lg p-2 bg-gray-200 hover:bg-gray-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Difficulty Level</label>
            <input
              type="text"
              className="w-full  rounded-lg p-2 bg-gray-200 hover:bg-gray-300"
            />
          </div>

          {/* Course Modules */}
          <div>
            <h3 className="text-lg font-semibold mb-3" >Course Modules</h3>
            <ul className="space-y-3">
              <div>
                <p className="font-medium">Module 1</p>
                <p className="text-blue-400 text-sm flex justify-between items-center">
                    Introduction to Advanced Photography
                    <Pencil size={18} className="cursor-pointer text-gray-600 ml-auto" />
                 </p>
            </div>
                <div>
                  <p className="font-medium">Module 2</p>
                  <p className="text-blue-400 text-sm">
                    Mastering Studio Lighting
                    <Pencil size={18} className="cursor-pointer text-gray-600 ml-auto" />
                  </p>
                </div>
                
              
                <div>
                  <p className="font-medium">Module 3</p>
                  <p className="text-blue-400 text-sm">
                    Advanced Post-Processing Techniques
                    <Pencil size={18} className="cursor-pointer text-gray-600 ml-auto" />
                  </p>
                </div>
                
                 <div>
                  <p className="font-medium">Module 4</p>
                  <p className="text-blue-400 text-sm">
                    Building a Professional Photography Workflow
                    <Pencil size={18} className="cursor-pointer text-gray-600 ml-auto" />
                  </p>
                </div>
               
            </ul>
            <button
              type="button"
              className="mt-4 px-4 py-2 rounded-lg  bg-gray-200 hover:bg-gray-300 font-bold"
            >
              Add Module
            </button>
          </div>

          {/* Buttons */}
   
        <div className="flex flex-col sm:flex-row sm:justify-end sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
            <button
                type="button"
                className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
            >
             Save Changes
            </button>
        <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold"
        >
            Publish Changes
            </button>
        </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <p>@2024 EduLearn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CourseEditPage;
