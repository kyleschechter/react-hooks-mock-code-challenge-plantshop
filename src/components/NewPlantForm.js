import React from "react";

function NewPlantForm({ handleNewPlant }) {

 const onNewPlant = (e) => {
   e.preventDefault()
   handleNewPlant(e)
 }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onNewPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
