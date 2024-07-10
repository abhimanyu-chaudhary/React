import React from "react";

function Music({song, artist, image, index, handleClick, favourite}){
    return(
        <>
            <div className="bg-zinc-300 w-[300px] h-[130px] relative flex gap-3 justify-start rounded-md m-4">
                <div className="w-32 h-32 mt-2 ml-2">
                    <img className="object-cover" src={image} alt="casattee image" />
                </div>
                <div className="mt-7 text-base">
                    <h3 className="font-semibold">{song}</h3>
                    <p className="italic text-sm">{artist}</p>
                </div>
                <button onClick={()=>handleClick(index)} className={`absolute bottom-[-10px] left-[50%] -translate-x-[50%] px-2 py-1 ${favourite ? "bg-green-600" : "bg-yellow-400"} rounded-md`}>{favourite === false ? "Add To Favourite" : "Added"}</button>
            </div>
        </>
    )
}
export default Music;