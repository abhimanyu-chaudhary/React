import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Slider(){
    const [val, setVal] = useState(false);
    return(
        <>
            <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
                <div className="relative w-64 h-40 bg-zinc-400 rounded-md flex overflow-hidden">
                    <img className={`shrink-0 w-full ${val ? "-translate-x-[100%]" : "-translate-x-[0%]"} h-full object-cover transition-transform duration-300`} src="https://images.unsplash.com/photo-1577424205036-56e9e093b9b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className={`shrink-0 ${val ? "-translate-x-[100%]" : "-translate-x-[0%]"} w-full h-full object-cover transition-transform duration-300`} src="https://images.unsplash.com/photo-1716220982197-b8e8439ed096?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span onClick={()=>setVal(()=> !val)} className={`absolute bottom-1 left-1/2 w-8 h-8 bg-[#dadada8a] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center rounded-full ${val === false ? "rotate-180" : "rotate-0"}`}>
                        <FaArrowRight />
                    </span>
                    
                </div>
            </div>
        </>
    )
}
export default Slider;