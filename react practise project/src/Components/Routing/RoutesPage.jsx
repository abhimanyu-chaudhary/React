import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import PageDetails from "./PageDetails";
function RoutesPage(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:name" element={<PageDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}
export default RoutesPage;