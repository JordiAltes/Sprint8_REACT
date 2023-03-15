import React from "react";
import { useState, useEffect } from "react";
import ShipDetails from "./ShipDetails";

const StarWarsShips = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setShips(data.results));
  }, []);
  

  return (
    <div className="container">
      <h1>Star Wars Ships</h1>
      {selectedShip ? (
        <ShipDetails
          ship={selectedShip}
          onBackClick={() => setSelectedShip(null)}
        />
      ) : (
        ships.map((ship) => (
          <div
            key={ship.name}
            className="shipContainer"
            onClick={() => setSelectedShip(ship)}
          >
            <p className="shipName">Name: {ship.name}</p>
            <p>Model: {ship.model}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StarWarsShips;
