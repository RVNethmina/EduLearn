import { useState } from "react";
import vector00 from "../assets/img/profile/vector-00.svg";
import avtar from "../assets/img/profile/avtar.png";
import logo from "../assets/img/profile/vector-00.svg";
import image1 from "../assets/img/profile/profile.png";
import "../assets/css/user-profile.css";

export default function AccountSettings() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q");
    console.log("Search:", q);
  };

  return (
    <>
      {/* --- Header --- */}
      <header className="navbar">
        <div className="nav-inner">
          <div className="brand">
            <span className="logo" aria-hidden>
              <img src={logo} alt="" />
            </span>
            <span className="brand-name">EduLearn</span>
          </div>

          <nav className="nav-links">
            <a href="#">Home</a>
            <a className="active" href="#">
              My learning
            </a>
            <a href="#">Browse</a>
            <a href="#">Business</a>
          </nav>

          <div className="nav-right">
            <button className="icon-btn" aria-label="Notifications">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5" />
                <path d="M9 17a3 3 0 0 0 6 0" />
              </svg>
            </button>
            <img src={avtar} alt="" className="avatar" />
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main id="main" className="account-container pass-container">
        <h1>Reset your password</h1>  

        {/* Personal details */}
        <section className="form-section pass-section">
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"placeholder="Email" />
          </div>
          
        </section>

        
        

        <button type="submit" className="btn btn-primary">
          Send reset link
        </button>
        <p className="pass-links"><a href="#">Remember your password?</a> <a href="#">Log in</a></p>
      </main>

      {/* --- Footer --- */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
        <p>© 2024 EduLearn. All rights reserved.</p>
      </footer>
    </>
  );
}
