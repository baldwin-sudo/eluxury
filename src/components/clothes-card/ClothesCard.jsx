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
      <div className="clothes-img-overlay">{description}</div>
      <img src={image} alt={title} />

      <p className="price">{price + "$"}</p>
    </div>
  );
}
