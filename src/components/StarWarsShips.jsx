import React from "react";
import { useState, useEffect } from "react";
import ShipDetails from "./ShipDetails";
import Swal from "sweetalert2";
import "animate.css";
import maestroYoda from "../assets/maestroYoda.png"

const StarWarsShips = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => response.json())
      .then((data) => setShips(data.results));
  }, [page]);

  function showMore() {
    if (page < 4) {
      setPage(page + 1);
    }
    if (page === 4) {
      Swal.fire({
        imageUrl: maestroYoda,
        imageHeight:200,
        imageWidth:200,
        background: "black",
        color: "yellow",
        title: "On the last page you are, to the first page are we redirecting",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        
      }).then((result) => {
        if (result.isConfirmed) {
          setPage(1)
        }
      });
      
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
          <button onClick={showMore} className="buttonShowMore">
            Show More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default StarWarsShips;
