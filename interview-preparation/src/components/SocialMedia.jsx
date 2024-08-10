import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function SocialMedia() {
    let [firstVal, setFirstVal] = useState(0);
    let [secondVal, setSecondVal] = useState(0);


    useEffect(() =>{
        setInterval(() => {
            firstVal = Math.floor(Math.random() * 500);
            secondVal = Math.floor(Math.random() * 500);
            setFirstVal(firstVal);
            setSecondVal(secondVal);
        }, 2000);

        clearInterval();
    })

    const letterMove = {
        transform : `translate(${firstVal}px, ${secondVal}px)`
    }
    

  return (
    <div className={`text font-extrabold border-[2px] border-slate-950 p-5 rounded-md mt-[30vh] select-none`} style={letterMove}>
      <h1 className='font-extrabold '>ABHIMANYU CHAUDHARY</h1>
    </div>
  )
}

export default SocialMedia;
