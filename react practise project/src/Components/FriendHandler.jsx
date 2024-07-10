import React, {useState} from "react"
import Friend from "./Friend"

function FriendHandler(){
    const raw = [
        {name: "Harsh Sharma", role: "SDE-2, Microsoft", rank: "Rank 1st", image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: true},
        {name: "Deepak Gujjar", role: "ML-1, InfoSYS", rank: "Rank 1st", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: true},
        {name: "Rohit Mehta", role: "SDE-1, PayTM", rank: "Rank 1st", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: true},
        {name: "Amit Maurya", role: "SDE-2, Google", rank: "Rank 1st", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: true}
      ]
    
      const [data, setData] = useState(raw);
      const handleClick = (changingIndex)=>{
        setData((prev)=>{
          return prev.map((item, index)=>{
            if(index === changingIndex) return {...item, friend: !item.friend}
            return item;
          })
        });
      }

    return(
        <>
        <div className='w-full h-screen flex flex-wrap justify-center items-center gap-5'>
          {data.map((item, index)=>(
            <>
              <Friend key={index} index={index} handleClick={handleClick} image= {item.image} name= {item.name} role={item.role} rank={item.rank} friend={item.friend} />
            </>
          ))}
        </div>
        </>
    )
}
export default FriendHandler;