
import React, { useState } from 'react';
import './login.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./SignUp";
import carrier from '../../assets/images/carer.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // هنا هيتحط الـ backend logic
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // هنا هيتحط الـ social login logic
  };

  return (
    <div className="login-page">

      {/* Top left curved shape */}
      <div className="bg-shape-top">
        <svg width="445" height="368" viewBox="0 0 445 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M196.729 253.995C81.1599 270.761 23.5 342 0 368V0H445C445 155.08 341.191 233.039 196.729 253.995Z" fill="url(#paint0_linear_24_544)"/>
          <defs>
            <linearGradient id="paint0_linear_24_544" x1="351.144" y1="184" x2="-225.68" y2="-56.6998" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2D82BB"/>
              <stop offset="1" stopColor="#89D0FC"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom right curved shape */}
      <div className="bg-shape-bottom">
        <svg width="298" height="228" viewBox="0 0 298 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M157.859 49.1765C235.252 38.7892 274 14 298 -3.05176e-05L298 228L3.05176e-05 228C2.21178e-05 131.918 61.1188 62.1605 157.859 49.1765Z" fill="url(#paint0_linear_24_545)"/>
          <defs>
            <linearGradient id="paint0_linear_24_545" x1="62.8518" y1="114" x2="439.725" y2="283.98" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2D82BB"/>
              <stop offset="1" stopColor="#89D0FC"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="login-container">
        <div className="login-illustration">
          <img 
            src={carrier} 
            alt="Career Growth Illustration"
          />
        </div>

        <div className="login-form-wrapper">
          <div className="login-form-content">
            <h1 className="login-title">
              Welcome Back To <span className="brand-name">Carrivo!</span>
            </h1>
            <p className="login-subtitle">Let's continue your journey</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="username@gmail.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkbox-text">Remember Me</span>
                </label>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="btn-login">
                Log In
              </button>
            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="social-login">
              <p className="social-title">Log In With</p>
              <div className="social-buttons">
                <button 
                  type="button"
                  className="social-btn"
                  onClick={() => handleSocialLogin('google')}
                  aria-label="Log in with Google"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>

                <button 
                  type="button"
                  className="social-btn"
                  onClick={() => handleSocialLogin('linkedin')}
                  aria-label="Log in with LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>

                <button 
                  type="button"
                  className="social-btn"
                  onClick={() => handleSocialLogin('facebook')}
                  aria-label="Log in with Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
                    {/* to sign up  */}

                    
           <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
