import React from "react";
import "./clothes-card.css";
export default function ClothesCard({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  return (
    <div className="clothes-card">
      <p className="title">{title}</p>
      {/* <div className="clothes-img-overlay">{description}</div> */}
      <img className="clothes-img" src={image} alt={title} />

      <img
        className="icon-clothes icon-wish icon-add-wish hidden"
        src="/assets/heart.png"
        alt="add"
      />
      <img
        className="icon-clothes  icon-wish  icon-remove-wish"
        src="/assets/heart.png"
        alt="remove"
      />
      <p className="price">{price + "$"}</p>
      <img
        className="icon-clothes  icon-add-cart"
        src="/assets/shopping-cart-add.png"
        alt=""
      />
    </div>
  );
}
