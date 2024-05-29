import React from 'react'

function Propes({text, color}){
    return(
        <>
           <button className={`mt-5 mr-5 px-3 py-1 rounded-md ${color}`}>
                {text}
            </button>
        </>
    )
} 
export default Propes;