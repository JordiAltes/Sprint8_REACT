import React from "react";
import { useState, useContext } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";
import maestroYoda from "../assets/maestroYoda.png";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogIn = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        imageUrl: maestroYoda,
        imageHeight: 200,
        imageWidth: 200,
        color: "yellow",
        background: "black",
        title: "All the fields must be fill",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    const userDataSaved = JSON.parse(localStorage.getItem("userData"));
    const userData = { email, password };

    if (
      userDataSaved.email === userData.email &&
      userDataSaved.password === userData.password
    ) {
      Swal.fire({
        imageUrl: maestroYoda,
        imageHeight: 200,
        imageWidth: 200,
        color: "yellow",
        background: "black",
        title: "Email and password correct",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          setIsLoggedIn(true);
          navigate("/List");
        }
      });
    }
    if (
      userDataSaved.email !== userData.email ||
      userDataSaved.password !== userData.password
    ) {
      Swal.fire({
        imageUrl: maestroYoda,
        imageHeight: 200,
        imageWidth: 200,
        color: "yellow",
        background: "black",
        title: "Email or password incorrect",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };
  return (
    <>
      <Header />
      <div className="webForm">
        <h2>Enter your email adress and password</h2>
        <form>
          <div className="inputForm">
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="on"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              minLength="6"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="divSubmit">
            <button type="submit" onClick={onLogIn}>
              Log in
            </button>
          </div>
          <p>
            Don’t have an account yet?
            <Link className="link" to="/SignUp">
              {" "}
              Sign up{" "}
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
