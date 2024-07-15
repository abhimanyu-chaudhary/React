import React, { useState } from 'react'

function Background() {
    const [backColor, setBackColor] = useState("white")

    const colorHandler = (color) => {
        switch (color){
            case 1:
                setBackColor("red");
                break;
            
            case 2:
                setBackColor("blue");
                break;
        }
    }
  return (
    <div  className={`w-screen h-screen ${backColor}`}>
        <div className='max-w-screen-lg mx-auto flex justify-center gap-4 pt-[50vh]'>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(1)}>Red</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(2)}>Blue</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(1)}>Yellow</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(1)}>Orange</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(1)}>Black</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(1)}>White</button>
        <button className='px-3 py-2 rounded-lg border-2 min-w-20' onClick={()=> colorHandler(1)}>Pink</button>
        </div>
    </div>
  )
}

export default Background
