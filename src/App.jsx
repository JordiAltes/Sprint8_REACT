import React from "react";
import "../src/index.css";
import Header from "./components/Header";
import StarWarsShips from "./context/ShipContext";

function App() {
  return (
    <div>
      <Header />
      <StarWarsShips />
    </div>
  );
}

export default App;
