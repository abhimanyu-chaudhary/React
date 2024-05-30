import React from "react";

function Card({data, handleDelete}){
    return(
            <div className="w-40 p-2 bg-yellow-500 flex flex-col justify-center items-center rounded-md">
                <div className="image w-12 h-12 rounded-full overflow-hidden">
                    <img className="w-full h-full" src={data.url} alt="" />
                </div>
                <h2 className=" text-base font-semibold">{data.name}</h2>
                <p className="m-1 opacity-50 text-xs font-semibold">{data.email}</p>
                <p className="mb-2 text-center leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam!</p>
                <button onClick={()=>handleDelete(data)} className="bg-red-600 px-4 py-1/3 m-1 rounded-md text-white">Delete</button>
            </div>
    )
}
export default Card;