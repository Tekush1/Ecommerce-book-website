import React, { useState } from "react";
import { auth, db } from "./firebase"; // Import Firebase setup
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    let formErrors = {};

    // Validation Logic
    if (!username.trim()) formErrors.username = "Username is required.";
    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!password.trim()) {
      formErrors.password = "Password is required.";
    } else if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(password)) {
      formErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      formErrors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      formErrors.password = "Password must contain at least one digit.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      formErrors.password = "Password must contain at least one special character.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      try {
        // Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          username,
          email,
          createdAt: new Date(),
        });

        console.log("User registered successfully:", user);
        alert("Registration successful!");
      } catch (error) {
        console.error("Error during registration:", error.message);
        setErrors({ general: error.message });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="title">Welcome Back!</h1>
        <p className="subtitle">Log in or sign up to continue</p>
        {errors.general && <p className="error-message">{errors.general}</p>}
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
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Submitting..." : "Login / Sign Up"}
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
