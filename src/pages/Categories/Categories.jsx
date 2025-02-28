import React, { useEffect } from "react";
import "./categories.css";
import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <div className="categories-container">
      <Link to="men" className="category-item categ-men">
        <p className="category-title ">Men's clothing</p>
        <img src="src/assets/men-cat.jpg" alt="" />
      </Link>
      <Link to="women" className="category-item categ-women">
        <p className="category-title">Women's clothing</p>
        <img src="src/assets/women-cat.jpg" alt="" />
      </Link>
      <Link to="jewelery" className="category-item categ-jew">
        <p className="category-title">Jewelery</p>
        <img src="src/assets/jewelery-cat.jpg" alt="" />
      </Link>
    </div>
  );
}
