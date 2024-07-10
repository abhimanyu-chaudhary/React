import React, { useState } from "react";
import Cards from "./Cards";
import Form from "./Form";
import { data } from "autoprefixer";
import { TbToggleLeftFilled } from "react-icons/tb";
import { TbToggleRightFilled } from "react-icons/tb";

function Main(){
    const [users, setUsers] = useState([]);

    const handleFormData = (data)=> {
        setUsers([...users, data]);
    }

    const handleDelete = (fetchData)=> {
        setUsers((prev)=>{
            return prev.filter((index) => index !== fetchData);
        })
    }

    const [theme, setTheme] = useState(true);

    return(
        <>
            <div className={`w-full h-screen ${theme ? "bg-blue-800" : "bg-zinc-200"} flex gap-4 justify-center items-center`}>
                <span onClick={()=>setTheme(()=> !theme)} className={`${theme ? "text-white" : "text-slate-950"} absolute top-4 right-8 text-4xl`}> {theme ? <TbToggleLeftFilled /> : <TbToggleRightFilled />} </span>

                <div className="container mx-auto">
                    <Cards handleDelete={handleDelete} users={users} />
                    <Form handleFormData={handleFormData} />
                </div>
            </div>
        </>
    )
}
export default Main;