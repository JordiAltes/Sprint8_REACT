import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { List } from "../pages/List";
import { Welcome } from "../pages/Welcome";
import { SignUp } from "../pages/SignUp";
import { LogIn } from "../pages/LogIn";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

/* const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/List" element={<List />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
); */
const Router = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        {isLoggedIn ? (
          <Route path="/List" element={<List />} />
        ) : (
          <Route path="/List" element={<LogIn />} />
        )}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
