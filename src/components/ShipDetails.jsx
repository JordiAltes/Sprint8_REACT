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
      <h1>{ship.name}</h1>
      <p>
        Model: <span>{ship.model}</span>
      </p>
      <p>
        Manufacturer: <span>{ship.manufacturer}</span>
      </p>
      <p>
        Cargo capacity: <span>{ship.cargo_capacity}</span>
      </p>
      <p>
        Cost: <span>{ship.cost_in_credits}</span>
      </p>
      <p>
        Max atmosphering speed: <span>{ship.max_atmosphering_speed}</span>
      </p>
      <p>
        Maximum speed in real space: <span>{ship.MGLT}</span>
      </p>
      <p>
        Length: <span>{ship.length}</span>
      </p>
      <p>
        Consumables: <span>{ship.consumables}</span>
      </p>
      <p>
        Starship class: <span>{ship.starship_class}</span>
      </p>
      <p>
        Crew: <span>{ship.crew}</span>
      </p>
      <p>
        Passenger capacity: <span>{ship.passengers}</span>
      </p>
      
      <button onClick={onBackClick}>Back to Ships</button>
    </div>
  );
};

export default ShipDetails;
