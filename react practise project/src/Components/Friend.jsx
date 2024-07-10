import React, { useState } from 'react'

function Friend({image, name, role, rank, friend, index, handleClick}){
    
    return(
        <>
            <div className='w-[250px] h-[320px] bg-blue-300 rounded-md'>
                    <div className='w-full h- flex justify-center mt-4'>
                        <img className='w-32 h-32 object-cover rounded-full' src={image} alt="" />
                    </div>
                    <div className='flex justify-center flex-col items-center mt-3'>
                        <h1 className='font-bold'>{name}</h1>
                        <h4>{role}</h4>
                        <p>{rank}</p>
                    </div>
                    <div className='flex gap-2 justify-center mt-4'>
                        <button onClick={()=>handleClick(index)} className={`px-4 py-1 ${friend ? "bg-blue-700" : "bg-slate-600"} rounded-md text-white`}>{friend ? "Add Friend" : "Request Sent"}</button>
                        {/* <button className='px-2 py-1 bg-red-700 rounded-md'>Ignore</button> */}
                    </div>
            </div>
        </>
    )
}

export default Friend;
