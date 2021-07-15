import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList, handleDelete }) {

  const listOfPlants = plantsList.map(plant => {
    const onDelete = () => {
      handleDelete(plant.id)
    }
    return (
      <PlantCard 
      key={plant.id}
      id={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
      onDelete={onDelete}
      />
    )
  })

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
