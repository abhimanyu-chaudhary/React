import React from "react";
import Card from "./Card";


function Cards({users, handleDelete}){
    return(
        <div className="w-full p-4 flex flex-wrap justify-center gap-7">
            {users.map((item, index)=>{
               return <Card data={item} key={index} handleDelete={handleDelete} />
            })}
        </div>
    )
}
export default Cards;