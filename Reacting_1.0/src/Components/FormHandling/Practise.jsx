import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

// function Practise(){
//     const name = useRef(null);
//     const age = useRef(null);
    
//     const handleClick = (event)=>{
//         event.preventDefault();
//         console.log(name.current.value , age.current.value);
//     }

//     return(
//         <div className="p-4">
//             <form action="" onSubmit={handleClick}>
//                 <input ref={name} type="text" placeholder="name"/>
//                 <input ref={age} type="number" placeholder="age"/>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

// function Practise(){
//     const [val, setVal] = useState({name: "", age: ""});

//     const handleClick = (event)=>{
//         event.preventDefault();
//         console.log(val)
//     }
//     return(
//         <>
//             <form action="" onSubmit={handleClick}>
//                 <input onChange={(event)=>setVal({...val,name : event.target.value})} type="text" placeholder="name" />
//                 <input onChange={(event)=>setVal({...val, age: event.target.value})} type="age" placeholder="age" />
//                 <input type="submit" />
//             </form>
//         </>
//     )
// }

function Practise(){
    const {register, handleSubmit} = useForm();
    console.log(register())
    return(
        <>
            <form action="" onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register('name')} type="text" placeholder="name" />
                <input {...register('age')} type="number" placeholder="age" />
                <input type="Submit"/>
            </form>
        </>
    )
}

export default Practise;