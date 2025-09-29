import React from "react";
import { Bell, User } from "lucide-react";

// Single-file React + Tailwind component for a centered "Oops! Something went wrong" page
// Usage: drop into your project as src/pages/ErrorPage.jsx and render at your 404 route
// Requires: Tailwind CSS + lucide-react

const  ErrorPage = ({ onGoHome }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top navigation */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">E</div>
            <div className="font-semibold">EduLearn</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a className="hover:text-slate-900" href="#">Home</a>
            <a className="hover:text-slate-900" href="#">My Courses</a>
            <a className="hover:text-slate-900" href="#">Browse</a>
            <a className="hover:text-slate-900" href="#">Resources</a>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Notifications" className="p-2 rounded-lg hover:bg-slate-100">
              <Bell size={18} />
            </button>
            <div className="w-9 h-9 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/user/80')" }} aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-start justify-center py-20 px-6">
        <div className="w-full max-w-2xl text-center">
          {/* Illustration box (use any image or SVG here) */}
          <div className="mx-auto mb-8 w-96 h-48 rounded-lg overflow-hidden bg-gradient-to-b from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center">
            {/* Simple decorative SVG to mimic an illustration */}
            <svg viewBox="0 0 600 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decorative illustration">
              <rect x="0" y="0" width="600" height="300" rx="14" fill="#eef2f4" />
              <g transform="translate(100,40)">
                <rect x="0" y="0" width="400" height="220" rx="12" fill="#dbe7e2" />
                <g transform="translate(40,30)">
                  <rect x="0" y="0" width="220" height="150" rx="8" fill="#fff" />
                  <circle cx="180" cy="40" r="28" fill="#c9d8d3" />
                  <path d="M 120 30 q 40 40 60 0" stroke="#b3c7c1" strokeWidth="6" fill="none" strokeLinecap="round" />
                  <path d="M 110 80 q 30 -30 60 0" stroke="#b3c7c1" strokeWidth="6" fill="none" strokeLinecap="round" />
                </g>
              </g>
            </svg>
          </div>

          <h1 className="text-2xl font-extrabold mb-2">Oops! Something went wrong.</h1>
          <p className="text-slate-500 mb-6">
            We're sorry, but the page you were looking for could not be found. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div>
            <button
              onClick={() => (onGoHome ? onGoHome() : (window.location.href = "/"))}
              className="inline-block px-5 py-2 rounded-lg bg-slate-100 text-slate-800 font-medium shadow-sm hover:opacity-95"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <a className="text-slate-500 hover:text-slate-700" href="#">Terms of Service</a>
          </div>

          <div className="w-full md:w-1/3 text-center text-slate-500">@2024 EduLearn. All rights reserved.</div>

          <div className="w-full md:w-1/3 text-center md:text-right">
            <a className="text-slate-500 hover:text-slate-700" href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default ErrorPage