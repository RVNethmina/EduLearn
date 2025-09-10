
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !role || !captcha || !agreeTerms) {
      setError('All fields are required, including CAPTCHA and Terms agreement.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Check your network or backend server.');
      console.error(err);
    }
  };

  const handleSocialLogin = (provider) => {
    window.location.href = `http://localhost:5000/api/auth/social/${provider}`;
  };

  return (
    <div className="signup-root">
      <div className="layout-container">
        <header className="header">
          <div className="logo-container">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fill="currentColor"
              />
            </svg>
            <h2 className="logo-text">EduLearn</h2>
          </div>
          <div className="nav-links">
            <a className="nav-link" href="/courses">Browse</a>
            <a className="nav-link" href="/instructors">Teach</a>
            <button className="btn btn-login" onClick={() => navigate('/login')}>
              <span className="truncate">Log in</span>
            </button>
          </div>
        </header>
        <div className="content-container">
          <div className="form-container">
            <h2 className="form-title">Sign up</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="signup-form">
              <label className="form-label">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </label>
              <label className="form-label">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </label>
              <label className="form-label">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="" disabled>Select Role</option>
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                </select>
              </label>
              <label className="form-label">
                <input
                  placeholder="Captcha (Implement reCAPTCHA)"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="form-input"
                  required
                />
              </label>
              
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="checkbox"
                  required
                />
                <p className="checkbox-text">I agree to the Terms of Service</p>
              </div>
              
              <button type="submit" className="btn btn-signup">
                <span className="truncate">Sign up</span>
              </button>
            </form>
            <p className="or-text">or</p>
            <div className="social-login">
              <button className="btn btn-social" onClick={() => handleSocialLogin('facebook')}>
                <span className="truncate">Continue with Facebook</span>
              </button>
              <button className="btn btn-social" onClick={() => handleSocialLogin('google')}>
                <span className="truncate">Continue with Google</span>
              </button>
            </div>
            <p className="terms-text">
              By signing up, you agree to receive emails from EduLearn. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;