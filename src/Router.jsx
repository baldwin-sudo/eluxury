import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import axios from "axios";
import Categories from "./pages/Categories/Categories.jsx";
import ClothesListing from "./pages/Clothes-listing/ClothesListing.jsx";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar.jsx"; // Barre de navigation

export default function AppRouter() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setClothes(response.data); // Save fetched data to state
        console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchClothes();
  }, []);
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/men"
            element={
              <ClothesListing category="men's clothing" clothes={clothes} />
            }
          />
          <Route
            path="/categories/women"
            element={
              <ClothesListing category="women's clothing" clothes={clothes} />
            }
          />
          <Route
            path="/categories/jewelery"
            element={<ClothesListing category="jewelery" clothes={clothes} />}
          />
          {/* <Route path="*" element={<NotFound />} />*/}
        </Routes>
      </div>
    </Router>
  );
}
