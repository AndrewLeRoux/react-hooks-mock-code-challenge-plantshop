import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch ('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => {setPlants(data)})
  }, [])

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  
  const updatedPlants = plants.filter(plant => plant.name.toLowerCase().includes(input.toLowerCase()))
  

  
  return (
    <main>
      <NewPlantForm onSubmit = {handleAddPlant}/>
      <Search input = {input} onSearch= {setInput}/>
      <PlantList plants = {updatedPlants}/>
    </main>
  );
}

export default PlantPage;
