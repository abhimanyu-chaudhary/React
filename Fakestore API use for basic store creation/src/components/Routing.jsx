import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";
import UserDetails from "./UserDetails";
function Routing(){
    return(
        <>
            <nav className="w-full py-4 bg-zinc-200 text-xl font-semibold flex gap-8 justify-center font-mono mb-10">
                <Link to="/">HOME</Link>
                <Link to="/user">USER</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}
export default Routing;