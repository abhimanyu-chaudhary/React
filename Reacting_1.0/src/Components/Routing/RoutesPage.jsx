import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Routes } from "react-router-dom";
function RoutesPage(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}
export default RoutesPage;