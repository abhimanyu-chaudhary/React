import React from "react";
import { Link } from "react-router-dom";
function About() {
    return(
        <>
            <div className="w-full text-3xl font-extrabold flex justify-center mt-20">
                <h1>This is About Us Page</h1>
            </div>
            <div className="flex flex-col mt-5 gap-10 m-auto w-1/2">
                <Link className="px-3 py-1 bg-red-600" to="/about/first">FIRST</Link>
                <Link className="px-3 py-1 bg-red-400" to="/about/second">SECOND</Link>
                <Link className="px-3 py-1 bg-red-200" to="/about/third">THIRD</Link>
            </div>
        </>
    )
}
export default About;