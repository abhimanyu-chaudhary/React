import React, { useState } from "react";

function Update(){
    const [val,setVal] = useState([
        {name: "Harsh", age: 24},
        {name: "Bikky", age: 27},
        {name: "Tau", age: 32}
    ]);

    return(
        <>
            <div className="items-center flex flex-col gap-4 justify-center mt-20 ml-0">
                {val.map((item)=> 
                    <div>
                        <h1>{item.name}</h1>
                        <h1>{item.age}</h1>
                    </div>
                )}
                <button onClick={()=>setVal(()=> val.map(item => item.name === "Tau" ? ({name: "Tau", age: 50}) : item))} className="px-3 py-1 bg-blue-800 rounded-xl text-white">ACTION</button>
            </div>
        </>
    )
}

export default Update;