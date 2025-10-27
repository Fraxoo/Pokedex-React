import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Info from "./pages/pokemon";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="pokemon/:id" element={<Info/>}/>
            </Routes>
        </BrowserRouter>
    );
}