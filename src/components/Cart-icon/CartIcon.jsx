import React from "react";
import "./icon-utls.js";
import "./cart-icon.css";
export default function CartIcon({ number }) {
  return (
    <div>
      <div className="icon-cart" data-number={number} />
    </div>
  );
}
