import React from "react";
import darthVader from "../assets/darthVader.png";
import StarWarsLogo from "../assets/StarWarsLogo.png";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  function logOut() {
    setIsLoggedIn(false);
  }
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
        {isLoggedIn ? (
          <div className="buttonLogOut">
            <div className="userIcon">
              <FontAwesomeIcon icon={faUserAstronaut} />
            </div>
            <div className="textLogOut1">{`${userData.firstName} ${userData.lastName}`}</div>
            <div className="textLogOut" onClick={logOut}>
              Log Out
            </div>
          </div>
        ) : (
          <div className="Header-links">
            <Link to="/LogIn">Log In</Link>
            <span></span>
            <Link to="/SignUp">Sign Up</Link>
          </div>
        )}
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
