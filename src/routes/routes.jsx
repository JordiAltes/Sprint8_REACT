import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "../pages/List";
import { Welcome } from "../pages/Welcome";
import { SignUp } from "../pages/SignUp";
import { LogIn } from "../pages/LogIn";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/List" element={<List />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
