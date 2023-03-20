import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "../pages/List";
import { Welcome } from "../pages/Welcome";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Welcome />} />
            <Route path="/List" element={<List />} />
        </Routes>
    </BrowserRouter>
)

export default Router