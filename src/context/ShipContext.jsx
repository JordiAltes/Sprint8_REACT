import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";

export const ShipsContext = createContext();

const StarWarsShips = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setShips(data.results));
  }, []);

  return (
    <ShipsContext.Provider value={ships}>
      <div className="container">
        <h1>Star Wars Ships</h1>
        {ships.map((ship) => (
          <div key={ship.name} className="shipContainer">
            <p className="shipName">Name: {ship.name}</p>
            <p>Model: {ship.model}</p>
          </div>
        ))}
      </div>
    </ShipsContext.Provider>
  );
};

export default StarWarsShips;
