import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  // State to manage form data and errors
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    let formErrors = {};

    // Check for empty fields
    if (!username.trim()) formErrors.username = "Username is required.";
    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!password.trim()) formErrors.password = "Password is required.";
    if (password.length < 6)
      formErrors.password = "Password must be at least 6 characters.";

    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      // Add your submission logic here (e.g., API call)
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field being edited
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="title">Welcome Back!</h1>
        <p className="subtitle">Log in or sign up to continue</p>
        <form className="input-group" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={`input-field ${errors.username ? "error" : ""}`}
              value={formData.username}
              onChange={handleChange}
              aria-label="Username"
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`input-field ${errors.email ? "error" : ""}`}
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`input-field ${errors.password ? "error" : ""}`}
              value={formData.password}
              onChange={handleChange}
              aria-label="Password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button type="submit" className="login-btn">
            Login / Sign Up
          </button>
        </form>
        <div className="actions">
          <a href="/reset-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>
      </div>
      <div className="illustration">
        <img
          src="https://example.com/illustration.png"
          alt="Login Illustration"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LoginPage;
