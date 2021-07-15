import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList }) {

  const listOfPlants = plantsList.map(plant => {


    return (
      <PlantCard 
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
      />
    )
  })

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
