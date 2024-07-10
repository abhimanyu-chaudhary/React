import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";
import { useContext } from "react";

function User(){
    const {users} = useContext(UserContext);
    // console.log(users);
    return(
        <div className="w-1/2 mx-auto">
            <h1 className="font-semibold">User Details</h1>
            <p className="text-xs mb-5">Here are the userlist present in our database:</p>
            
            <div className="flex gap-2 flex-col">
                {users.map((user)=> (
                    <Link key={user.id} to={`/user/${user.id}`}  className="w-full py-1 px-2 bg-orange-200 mb-2"> 
                         <h2 className="font-semibold">{user.title}</h2>
                         {/* <p className="italic text-base">{user.email}</p>
                         <p>{user.city}</p> */}
                    </Link>
                ))} 
            </div>
            
        </div> 
        
    )
}
export default User;