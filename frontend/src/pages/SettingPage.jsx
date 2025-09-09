import React from "react";
import logo from "../assets/logo.png"
import { Bell } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray shadow">
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src={logo} alt="logo" className="w-10" />
          <span>EduLearn</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="home.html" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Browse</a>
            <a href="#" className="hover:text-blue-500">My Learning</a>
            <a href="#" className="hover:text-blue-500">Whislist</a>
          </nav>
          <div className="flex gap-2">
            
               <button className="bg-gray-100 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition">
      <Bell className="w-5 h-5 text-gray-700" />
    </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8Py44jLtIhnved91AB50jO-DP8_n3_5AZAnMzQJ8rCI_zKIM7PBLeqmgH0No8StUtjyGMKCKI79KK_PExoMFqENpNLP5wadJexsq6Vkv6iUSi-WKDQFJ7sEx0bePjzuIxDi6WQFnxbmNwb929vMni-3BffxxDGISIXwzQDRwLr4rmvpcVnEGS-zpNpaP7Lz6kaykxjmVP0qG7crhxXnLXvfoxwrwe9tXilqu6movpulVN84QlnEHFmtc35GrJDKdfJtfD8IP4J3cT")',
              }}
            ></div>
          </div>
          <div className="md:hidden text-2xl cursor-pointer">&#9776;</div>
        </div>
      </header>

      {/* Main Quiz Content */}
      <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 border-t">
        <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 border-t">
  {/* Center content */}
  <div className="flex-grow flex items-center justify-center">
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      {/* Language Section */}
      <div className="mb-6">
        <h2 className="font-medium mb-2">Language</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md border bg-black text-white border-black">
            English
          </button>
          <button className="px-4 py-2 rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-100">
            Spanish
          </button>
          <button className="px-4 py-2 rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-100">
            French
          </button>
        </div>
      </div>

      {/* Theme Section */}
      <div className="mb-6">
        <h2 className="font-medium mb-2">Theme</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md border bg-black text-white border-black">
            Light
          </button>
          <button className="px-4 py-2 rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-100">
            Dark
          </button>
        </div>
      </div>

      {/* Account Section */}
      <div className="mb-6">
        <h2 className="font-medium mb-2">Account</h2>
        <button className="text-red-600 hover:underline">Delete Account</button>
      </div>

      {/* Arrow */}
      <div className="flex justify-end">
        <ArrowRight className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  </div>
</div>
        

        {/* Footer */}
        <footer className="flex justify-between items-center px-6 py-4 text-sm text-gray-500 ">
          <a href="#">Terms of Service</a>
          <p className="text-blue">Privacy Policy</p>
          <a href="#">Accessibility</a>
        </footer>
      <div className="px-6 py-4 text-sm text-gray-500 text-center">
       <p>©2024 EduLearn. All rights reserved.</p>
       </div>
      </div>
    </div>
  );
}
