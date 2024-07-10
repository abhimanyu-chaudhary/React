import { Route, Routes } from "react-router-dom";
import Front from "./Front";
import MainBody from "./MainBody";
import Nav from "./Nav";
import ProductPage from "./ProductPage";

function Home(){
    return(

        <Routes>
                <Route classname="w-screen" path="/" element={<MainBody /> } />

                <Route path="/products/:id" element={<ProductPage />} />
        </Routes>

    )
}
export default Home;