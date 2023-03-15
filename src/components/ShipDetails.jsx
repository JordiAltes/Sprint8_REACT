import React from "react";
import No_Image_Available from "../assets/No_Image_Available.jpeg";

const ShipDetails = ({ ship, onBackClick }) => {
  const replaceImage = (error) => {
    error.target.src = No_Image_Available;
  };
  const id = ship.url.slice(32, -1);
  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  return (
    <div className="shipDetails">
      <img src={image} onError={replaceImage} />
      <h2>{ship.name}</h2>
      <p>Model: {ship.model}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Cargo capacity: {ship.cargo_capacity}</p>
      <p>Cost: {ship.cost_in_credits}</p>
      <p>Max atmosphering speed: {ship.max_atmosphering_speed}</p>
      <p>Length: {ship.length}</p>
      <p>Consumables: {ship.consumables}</p>
      <p>Starship class: {ship.starship_class}</p>
      <p>Crew: {ship.crew}</p>
      <p>Passenger capacity: {ship.passengers}</p>
      <p>Maximum speed in real space: {ship.MGLT}</p>
      <button onClick={onBackClick}>Back to Ships</button>
    </div>
  );
};

export default ShipDetails;
