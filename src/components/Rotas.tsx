import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} /> 
                {/* <Route path="/portfolio" element={<Portfolio />} /> */}                       
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;