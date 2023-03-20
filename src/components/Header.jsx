import React from "react";
import darthVader from "../assets/darthVader.png";
import StarWarsLogo from "../assets/StarWarsLogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="Header">
      <div className="headerUp">
        <div className="logoDarthVader">
          <img src={darthVader} alt="darthVader" className="darthVader" />
        </div>
        <div className="Header-logoContainer">
          <img
            src={StarWarsLogo}
            alt="logo star wars"
            className="Header-logo"
          />
        </div>
        <div className="Header-links">
          <a href="">Log In</a>
          <span>//</span>
          <a href="">Sign Up</a>
        </div>
      </div>
      <div className="headerDown">
        <Link to="/" className="navLink">
          {"  "}HOME{"  "}
        </Link>
        <Link to="/List" className="navLink">
          {"  "}STARSHIPS{"  "}
        </Link>
      </div>
    </header>
  );
};
export default Header;
