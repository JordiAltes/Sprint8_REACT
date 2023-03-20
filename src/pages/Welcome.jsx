import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export function Welcome() {
  return (
    <div>
      <Header />
      <h1 className="h1Welcome">Welcome to Star Wars fan page</h1>
      <h2 className="textWelcome">
        Below you can see all the ships from all the movies.
        <br></br> If you click on each ship you can see the most important
        information about each one
      </h2>
      <Footer />
    </div>
  );
}
