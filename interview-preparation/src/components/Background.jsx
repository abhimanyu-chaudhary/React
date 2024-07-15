import React, { useState } from 'react'

function Background() {
    const [backColor, setBackColor] = useState("white")

    const colorHandler = (color) => {
        switch (color){
            case Red:
                return backColor = "bg-red-500";
                break;
            
            case Blue:
                backColor = "bg-blue-500";
                break;
        }
    }
  return (
    <div style={{backgroundColor: backColor }} className='w-screen h-screen'>
        <div className='max-w-screen-lg mx-auto flex justify-center gap-4 pt-[50vh]'>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(Red)}>Red</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20'>Blue</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20'>Yellow</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20'>Orange</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20'>Black</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20'>White</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20'>Pink</button>
        </div>
    </div>
  )
}

export default Background
