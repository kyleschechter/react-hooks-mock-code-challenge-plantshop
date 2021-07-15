import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const api = "http://localhost:6001/plants"
  const [plantsList, setPlantsList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(api)
    .then(r => r.json())
    .then(data => {
      setPlantsList(data)
    })
  }, [])


  const handleNewPlant = (e) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        image: e.target.image.value,
        price: e.target.price.value
      }) 
    }
    if (e.target.name.value === "" || e.target.image.value === "" || e.target.price.value === "") {
      alert("Make sure you have a Name, Image URL and Price before submitting a new plant!")
    } else {
      fetch(api, configObj)
      .then(r => r.json())
      .then(data => {
        setPlantsList([...plantsList, data])
        e.target.reset()
      })
    }
  }


  const handleDelete = (iD) => {
    fetch(`${api}/${iD}`, { method: "DELETE" })
    .then(() => {
      const updatedPlants = plantsList.filter(plant => plant.id !== iD)
      setPlantsList(updatedPlants)
    })
  }
  

  const filteredPlants = plantsList.filter(plant => {
    if (search === "") return true
    return plant.name.toLowerCase().includes(search.toLocaleLowerCase())
  })


  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plantsList={filteredPlants} handleDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;
