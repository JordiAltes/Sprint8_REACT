import React from "react";
import "../src/index.css";
import Header from "./components/Header";
import StarWarsShips from "./components/StarWarsShips";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <StarWarsShips />
      <Footer />
    </div>
  );
}

export default App;
