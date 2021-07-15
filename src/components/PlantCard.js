import React, { useState } from "react";

function PlantCard({ id, name, image, price, onDelete }) {
  const [inStock, setInStock] = useState(true)
  let [newPrice, setNewPrice] = useState(price)

  const handleButtonClick = () => {
    if (inStock) {
      setInStock(!inStock)
    } else {
      alert("Sorry, we're fresh out!")
    }
  }

  const handleChangePrice = (e) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: e.target.innerText === "+" ? Math.floor((newPrice * 100) + 100) / 100 : Math.floor((newPrice * 100) - 100) / 100 
      })
    }

    fetch(`http://localhost:6001/plants/${id}`, configObj)
    .then(r => r.json())
    .then(data => setNewPrice(data.price))
  }

  return (
    <li className="card">
      <img src={image} alt={name}/>
      <h4>{name} <span style={{ fontSize: "12px" }} onClick={onDelete}>🗑</span></h4>
      <div>
        <p>Price: ${newPrice}</p>
        <button onClick={handleChangePrice}>+</button> <button onClick={handleChangePrice}>-</button>
      </div>
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
