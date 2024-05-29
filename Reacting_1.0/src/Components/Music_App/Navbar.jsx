import React, { useState } from "react";

function Navbar({data}){
    
    return(
        <>
            <div className="h-10 bg-yellow-100 flex items-center justify-between py-10">
                <div>
                    <h1 className="font-bold text-3xl ml-40">9.XM</h1>
                </div>
                <div className="relative mr-40">
                    <button className="bg-yellow-300 px-6 py-2 rounded-md  font-semibold">Favourite</button>
                    <p className="bg-slate-500 absolute px-1.5 py-0 rounded-full bottom-[-10px] right-[-5px] text-sm text-white">{data.filter((item)=> item.favourite).length}</p>
                </div>
            </div>
        </>
    )
}
export default Navbar;