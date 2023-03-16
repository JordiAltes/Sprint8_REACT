import React from "react";
import { useState, useEffect } from "react";
import ShipDetails from "./ShipDetails";

const StarWarsShips = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
    .then((response) => response.json())
    .then((data) => setShips(data.results));
  }, [page]);
  
   function showMore () {
    if (page < 4) {
      setPage(page + 1)
    }
    if (page === 4) {
      alert("Ja estas a la ultima pagina, et redirigim a la pagina 1")
      setPage(1)
    }
  } 

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
      {selectedShip === null ? (
        <div>
          <button  onClick={showMore}  className="buttonShowMore">Show More</button>
        </div>
      ) : null}
    </div>
  );
};

export default StarWarsShips;
