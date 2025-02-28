import React from "react";
import "./navbar.css";
import "./nav-utls.js";
import CartIcon from "../Cart-icon/CartIcon.jsx";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-brand nav">
        <span className="icon-crown">E</span>luxury
      </div>
      <ul className="nav-items">
        <li className="nav-item ">
          <Link id="home-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <div className="nav-icon">
          <img
            className="icon-heart"
            src="src/assets/heart.png"
            alt="wishlist"
            title="this is your wishlist , click to consult !"
          />
        </div>
        <div className="nav-icon">
          <CartIcon number="8" />
        </div>
      </div>
    </nav>
  );
}
