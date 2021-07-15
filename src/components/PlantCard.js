import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [inStock, setInStock] = useState(true)

  const handleButtonClick = () => {
    if (inStock) {
      setInStock(!inStock)
    } else {
      alert("Sorry, we're fresh out!")
    }
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button 
      onClick={handleButtonClick} 
      className={inStock ? "primary" : ""}
      >
        {inStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;
