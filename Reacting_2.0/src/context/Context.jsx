import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const Context = (props) =>{
    // const [users, setUsers] = useState([
    //     {id: 0, name: 'John', email: 'john@yahoo.com', city: 'San Francisco'},
    //     {id: 1, name: 'Smith', email: 'smith@yahoomail.com', city: 'Perth'},
    //     {id: 2, name: 'Hawk', email: 'hawk@gmail.com', city: 'Sydney'},
    //     {id: 3, name: 'Micheal', email: 'micheal@hotmail.com', city: 'Boston'},
    //     {id: 4, name: 'Larry', email: 'larry@google.com', city: 'New York'},
    // ])

    const [users, setUsers] = useState([]);
    const getUser = () =>{
        const api = "https://fakestoreapi.com/products/";

        axios.get(api).then((user)=>{
            setUsers(user.data);
        }).catch((err)=>
            console.log(err));
    }

    useEffect(()=>{
        getUser();
    },[])

    return <>
            <UserContext.Provider value={{users, setUsers}}>
                {props.children}
            </UserContext.Provider>;
    </>
    
    
}

export default Context;