import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";

const StarWarsShips = () => {
    const [ships, setShips] = useState([]);
  
    useEffect(() => {
      fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(data => setShips(data.results));
    }, []);
  
    return (
      <div className="container">
        <h1>Star Wars Ships</h1>
        {ships.map(ship => (
          <div key={ship.name} className="shipContainer">
            <p>Name: {ship.name}</p>
            <p>Model: {ship.model}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default StarWarsShips;