import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";

function MainPage(){
    return(
        <>
          <nav className="w-full py-5 bg-slate-300 flex justify-center gap-10 font-semibold ">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/services">Services</Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/services" element={<Services/>} />
          </Routes>
        </>
    )
}
export default MainPage;