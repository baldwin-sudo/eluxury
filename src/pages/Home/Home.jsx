import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-hero">
          <p className="home-title title1">
            <img
              className="home-title-icon "
              src="src/assets/crown.png"
              alt="crown"
            />
            luxurious clothes
          </p>
          <p className="home-title title2">
            <img
              className="home-title-icon"
              src="src/assets/crown.png"
              alt="crown"
            />
            anywhere
          </p>
          <p className="home-title title3">
            <img
              className="home-title-icon"
              src="src/assets/crown.png"
              alt="crown"
            />
            anytime
          </p>
        </div>
        <div className="home-img home-small-pic"></div>
      </div>
      <div className="home-img  home-right">
        {/* <img src="src/assets/home1.jpg" alt="" /> */}
      </div>
    </div>
  );
}
