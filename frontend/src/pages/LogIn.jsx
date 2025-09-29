import React from "react";
import logo from "../assets/logo.png"
import { Globe } from "lucide-react";

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
            <a href="#" className="hover:text-blue-500">Courses</a>
            <a href="#" className="hover:text-blue-500">Instructors</a>
            <a href="#" className="hover:text-blue-500">Pricing</a>
          </nav>
          <div className="flex gap-2">

            <button className=" px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition">
                  SignUp
              
              </button>
            
               <button className="bg-gray-100 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition">
      <Globe className="w-5 h-5 text-gray-700" />
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

      <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h2 className="text-center text-2xl font-semibold mb-6">Log in to EduLearn</h2>
        
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email or username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
          </div>

<button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Log in
          </button>
        </form>

        <div className="mt-4 space-y-2">
          <button className="w-full py-2 border rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200">
            Continue with SocialApp
          </button>
          <button className="w-full py-2 border rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200">
            Continue with QuickConnect
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
          <p>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </p>
        </div>
      </div>
    </div>

          
      </div>
    
  );
}
