import React from "react";
import { Link } from "react-router-dom";
import "../Layout/Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/products" className="navbar-link">
        Products
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
    </nav>
  );
};

export default Header;
