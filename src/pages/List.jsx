import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import StarWarsShips from "../components/StarWarsShips";
import "../index.css";

export function List() {
  return (
    <>
      <Header />
      <StarWarsShips />
      <Footer />
    </>
  );
}
