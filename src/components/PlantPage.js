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

    fetch(api, configObj)
    .then(r => r.json())
    .then(data => setPlantsList([...plantsList, data]))
  }

  const filteredPlants = plantsList.filter(plant => {
    if (search === "") return true
    return plant.name.toLowerCase().includes(search.toLocaleLowerCase())
  })


  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plantsList={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
