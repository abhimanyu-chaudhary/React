import React from "react";
import { Link, NavLink } from "react-router-dom";
import RoutesPage from "./RoutesPage";

function Navigation(){
    return(
        <>
            <nav className="py-5 bg-slate-200 mx-auto flex gap-10 justify-center">
                <NavLink style={(e)=>{
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    }
                }}
                to="/">Home</NavLink>

                <NavLink className={(e)=>{
                    return[
                        e.isActive ? "text-red-500" : "",
                        e.isActive ? "font-bold" : "",
                    ].join(" ");
                }}
                to="/about">About Us</NavLink>

                <NavLink to="/contact">
                    {(e)=>{
                        return(
                            <span className={[
                                e.isActive ? "text-red-500" : "",
                                e.isActive ? "font-bold" : "",
                            ].join(" ")}>
                                Contact Us
                            </span>
                        )
                    }}
                </NavLink>
            </nav>
            <RoutesPage />
        </>
    )
}
export default Navigation;