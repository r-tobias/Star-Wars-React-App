import { useEffect, useState } from 'react';
import './App.css';
import StarShipCard from './components/StarShipCard';
import { getAllStarships } from './services/sw-api';
function App() {
  const [starships, setStarships] = useState([])

useEffect(async () => {
  const allStarships = await getAllStarships()
  setStarships(allStarships)

}, []);

  return (
    <div className="App">
      <header>
        <h3> STARWARS STARSHIPS </h3></header>
        <div className='main-container'>
      {starships.map((starship, index) => {
        return <StarShipCard starship = {starship} key = {index} />
      })}

        </div>
    </div>
  );
}

export default App;
