import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      {/* Navbar is placed here to render on all pages */}
      <Navbar />
      <Routes>
        {/* Define the routes for your application */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
