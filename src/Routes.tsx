import { Routes as Paths, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export const Routes = () => {
    return (
        <Paths>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Paths>
    );
}