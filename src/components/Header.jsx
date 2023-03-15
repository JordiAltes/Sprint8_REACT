import React from "react";
/* import { Link } from "react-router-dom";
 *//* import logo_StarWars from "../assets/logo_starWars.png";
 */import darthVader from "../assets/darthVader.png";
import StarWarsLogo from "../assets/StarWarsLogo.png"
const Header = () => {
  return (
    <header className="Header">
      <div className="logoDarthVader">
        <img src={darthVader} alt="darthVader" className="darthVader" />
      </div>
      <div className="Header-logoContainer">
        <img src={StarWarsLogo} alt="logo star wars" className="Header-logo" />
      </div>
      <div className="Header-links">
        <a href="">Log In</a>
        <span>//</span>
        <a href="">Sign Up</a>
      </div>
    </header>
  );
};
export default Header;
