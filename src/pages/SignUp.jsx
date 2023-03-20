import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";
import maestroYoda from "../assets/maestroYoda.png";

export function SignUp() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      firstName.trim() === "" ||
      lastName.trim() === ""
    ) {
      Swal.fire({
        imageUrl: maestroYoda,
        imageHeight: 200,
        imageWidth: 200,
        background: "black",
        color: "yellow",
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
    const userData = { firstName, lastName, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);
    setFirstName(" ");
    setLastName(" ");
    setEmail(" ");
    setPassword("");
  };
  return (
    <>
      <Header />

      <div className="webForm">
        <h2>Create your account</h2>
        <form>
          <div className="inputForm">
            <input
              type="text"
              placeholder="First name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="divSubmit">
            <button className="buttonSubmit" type="submit" onClick={onSubmit}>
              Sign up
            </button>
          </div>
          <p>
            Already have an account?
            <Link className="link" to="/LogIn">
              {" "}
              Log in{" "}
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
