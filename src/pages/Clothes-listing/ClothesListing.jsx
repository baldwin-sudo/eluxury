import React from "react";
import "./clothes-listing.css";
import ClothesCard from "../../components/clothes-card/ClothesCard";

export default function ClothesListing({ clothes, category }) {
  return (
    <div className="clothes-container">
      <p>
        Category {">"} {category}
      </p>
      <div className="clothes-sub-container">
        {clothes
          .filter((element) => element.category === category) // Filter items by category
          .map(
            (
              element // Use map to return JSX for each item
            ) => (
              <ClothesCard
                key={element.id} // Use a unique key for each item
                id={element.id}
                title={element.title}
                description={element.description}
                price={element.price}
                category={element.category}
                image={element.image}
              />
            )
          )}
      </div>
    </div>
  );
}
