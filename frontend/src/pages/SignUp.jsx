import React from "react";
import logo from "../assets/logo.png";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] flex flex-col">
      {/* Navbar */}
      <nav className="w-full h-[65px] border-b border-[#E5E8EB] flex items-center justify-between px-10">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src={logo} alt="logo" className="w-10" />
          <span>EduLearn</span>
        </div>

        {/* Right Section (Browse, Teach, Login) */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-[#0D141C] hover:text-blue-600"
          >
            Browse
          </a>
          <a
            href="#"
            className="text-sm font-medium text-[#0D141C] hover:text-blue-600"
          >
            Teach
          </a>
          <button className="bg-[#E8EDF2] px-5 py-2 rounded-lg text-sm font-bold text-[#0D141C]">
            Log In
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#0D141C] mb-6">Sign up</h1>

        <form className="w-full max-w-md space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 px-4 rounded-lg bg-[#E8EDF2] placeholder:text-gray-600 text-base"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-14 px-4 rounded-lg bg-[#E8EDF2] placeholder:text-gray-600 text-base"
            />
          </div>

          {/* Role */}
          <div>
            <select className="w-full h-14 px-4 rounded-lg bg-[#E8EDF2] text-base text-[#0D141C]">
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Social Logins */}
          <div className="flex gap-3 mt-2">
            <button className="flex-1 h-10 bg-[#E8EDF2] rounded-lg font-bold text-sm text-[#0D141C]">
              Continue with Facebook
            </button>
            <button className="flex-1 h-10 bg-[#E8EDF2] rounded-lg font-bold text-sm text-[#0D141C]">
              Continue with Google
            </button>
          </div>

          {/* Terms of Service */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-[#CFDBE8] rounded"
            />
            <span className="text-sm text-[#0D141C]">
              I agree to the Terms of Service
            </span>
          </div>

          {/* Signup Button */}
          <button className="w-full h-14 bg-[#1280ED] text-white rounded-lg font-bold text-sm">
            Sign up
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-xs text-center text-[#4D7399] mt-4 px-4">
          By signing up, you agree to receive emails from EduLearn. You can
          unsubscribe at any time.
        </p>
      </main>
    </div>
  );
}
