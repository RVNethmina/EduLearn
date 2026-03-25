import React, { useRef, useState } from "react";
import logo from "../assets/img/assigment/vector-00.svg";
import avtar from "../assets/img/assigment/avtar.png";
import "../assets/css/assignment.css";


function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <span className="logo" aria-hidden><img src={logo} alt="" /></span>
          <span className="brand-name">EduLearn</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a className="active" href="#courses">Courses</a>
          <a href="#instructors">Instructors</a>
          <a href="#resources">Resources</a>
        </nav>

        <div className="nav-right">
          <button className="icon-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5" />
              <path d="M9 17a3 3 0 0 0 6 0" />
            </svg>
          </button>
          <img src={avtar} alt="" className="avatar" />
        </div>
      </div>
    </header>
  );
}

function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <a href="#courses">Courses</a>
      <span>/</span>
      <a href="#intro-psych">Introduction to Psychology</a>
      <span>/</span>
      <span className="current">Assignment 1</span>
    </div>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

function StatusPill({ label = "Submitted" }) {
  return <span className="pill pill-gray">{label}</span>;
}

function Dropzone({ onUpload }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  function selectFiles(e) {
    const f = Array.from(e.target.files || []);
    setFiles(f);
  }

  function onDrop(e) {
    e.preventDefault();
    const f = Array.from(e.dataTransfer.files || []);
    setIsDragging(false);
    if (f.length) setFiles(f);
  }

  function handleUpload() {
    if (!files.length) return;
    onUpload(files);
    setFiles([]);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className={`dropzone ${isDragging ? "dragging" : ""}`}
         onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
         onDragLeave={() => setIsDragging(false)}
         onDrop={onDrop}
         role="group"
         aria-label="File upload">
      <div className="dropzone-inner">
        <p className="dz-title">Drag and drop files here or</p>
        <button className="link-btn" onClick={() => inputRef.current?.click()}>
          Browse files
        </button>
        <input
          ref={inputRef}
          type="file"
          multiple
          onChange={selectFiles}
          hidden
        />
        <button className="btn" disabled={!files.length} onClick={handleUpload}>
          Upload
        </button>

        {files.length > 0 && (
          <ul className="file-list">
            {files.map((f) => (
              <li key={f.name}>{f.name} <span className="muted">({Math.ceil(f.size/1024)} KB)</span></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function SubmissionsTable({ submissions }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Submission Date</th>
            <th>Status</th>
            <th>Grade</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((s, i) => (
            <tr key={i}>
              <td>{s.date}</td>
              <td><StatusPill label={s.status} /></td>
              <td>{s.grade}</td>
              <td>
                <a href="#view" className="table-link">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FeedbackCard() {
  return (
    <div className="feedback">
      <div className="feedback-header">
        <img src={avtar} alt="" className="avatar avatar-sm" />
        <div className="feedback-ins">
          <div className="feedback-name">Dr. Emily Carter</div>
          <div className="feedback-date">October 16, 2024</div>
        </div>
      </div>
      <p className="feedback-text">
        Excellent work, Sarah! Your essay demonstrates a strong understanding of cognitive psychology.
        However, consider expanding on the practical applications of these principles in everyday life.
      </p>
    </div>
  );
}

export default function App() {
  const [submissions, setSubmissions] = useState([
    { date: "October 20, 2024", status: "Submitted", grade: "N/A" },
    { date: "October 15, 2024", status: "Submitted", grade: "B+" },
  ]);

  function handleUpload(files) {
    setSubmissions((prev) => [
      { date: formatDate(new Date()), status: "Submitted", grade: "N/A" },
      ...prev,
    ]);
    // Simulate upload
    console.log("Uploading files:", files.map(f => f.name));
  }

  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Breadcrumbs />

        <h1 className="page-title">Assignment 1: Essay on Cognitive Psychology</h1>
        <div className="due">Due: November 15, 2024, 11:59 PM</div>

        <section className="section">
          <h2 className="section-title">Instructions</h2>
          <p className="muted">
            Write a comprehensive essay on the principles of cognitive psychology, focusing on memory and attention.
            The essay should be 1500–2000 words and include references to at least three academic sources.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Submission</h2>
          <Dropzone onUpload={handleUpload} />
        </section>

        <section className="section">
          <h2 className="section-title">Past Submissions</h2>
          <SubmissionsTable submissions={submissions} />
        </section>

        <section className="section">
          <h2 className="section-title">Instructor Feedback</h2>
          <FeedbackCard />
        </section>

        <footer className="footer">
          <div className="footer-links">
            <a href="#tos">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="copyright">©2024 EduLearn. All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}