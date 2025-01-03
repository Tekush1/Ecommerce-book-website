import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">✨ Apna bazarr </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/deals">Deals</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/cart">🛒 Cart</Link>
        {/* Add the link to login page */}
        <Link to="/login">👤 Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
