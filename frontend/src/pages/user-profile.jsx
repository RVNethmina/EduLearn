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
      <main id="main" className="account-container">
        <h1>Account</h1>

        {/* Profile Photo */}
        <section className="form-section">
          <h2>Profile photo</h2>
          <div className="profile-photo-area">
            <img src={image1} alt="" />
            <button type="button" className="btn btn-secondary">
              Upload photo
            </button>
          </div>
        </section>

        {/* Bio */}
        <section className="form-section">
          <h2>Bio</h2>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" rows="3"></textarea>
          </div>
        </section>

        {/* Personal details */}
        <section className="form-section">
          <h2>Personal details</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" />
          </div>
        </section>

        {/* Instructor bio */}
        <section className="form-section">
          <h2>Instructor bio</h2>
          <div className="form-group">
            <label htmlFor="instructor-bio">Instructor bio</label>
            <textarea id="instructor-bio" rows="5"></textarea>
          </div>
        </section>

        {/* Settings */}
        <section className="form-section">
          <h2>Settings</h2>

          {/* Email notifications */}
          <div className="settings-item">
            <div className="description">
              <h3>Email notifications</h3>
              <p>
                Receive notifications about course updates, announcements, and
                more.
              </p>
            </div>
            <div className="action">
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          {/* Password change */}
          {!showPasswordForm ? (
            <div className="settings-item">
              <div className="description">
                <h3>Password</h3>
                <p>Manage your account password.</p>
              </div>
              <div className="action">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowPasswordForm(true)}
                >
                  Change
                </button>
              </div>
            </div>
          ) : (
            <div className="password-form">
              <div className="form-group">
                <label htmlFor="current-password">Current Password</label>
                <input type="password" id="current-password" />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm New Password</label>
                <input type="password" id="confirm-password" />
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  Save Password
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowPasswordForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>

        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
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
