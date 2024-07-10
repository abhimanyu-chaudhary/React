import { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

function UserDetail(){
    const navigate = useNavigate();
    
    const {id} = useParams();
    const {users} = useContext(UserContext);

    return(
        <>
            {/* <div className="flex flex-col items-center">
                <h1 className="mb-5 font-bold">USER DETAILS</h1>
                <p>Hey, {users[id].name}!</p>
                <p>Your email address is <span className="italic font-bold">{users[id].email}</span></p>
                <p>Your current location is <span className="font-bold">{users[id].city}</span></p>
                <button onClick={()=>navigate(-1)} className="mt-5 w-1/3 rounded px-2 py-1 bg-blue-600 text-white">GO BACK</button>
            </div> */}

            <div className="flex flex-col items-center">
                <h1 className="mb-5 font-bold">PRODUCT DETAILS</h1>
                <div className="mx-auto w-1/2 ">
                    <img className="mx-auto w-1/4 h-1/4" src={users[id].image} alt="" />
                    <h2 className="font-bold text-center mb-2">{users[id].title}</h2>
                    <h2 className="font-bold text-xl px-1 py-1 bg-orange-500">Rs.{users[id].price}/-</h2>
                    <p className="text-xs mt-2 italic">{users[id].description}</p>
                    <p className="text-end text-sm">Rating: <span className={`px-1 ${users[id].rating.rate > 3.5 ? "bg-green-400" : "bg-red-500"} rounded`}>{users[id].rating.rate}</span> based on {users[id].rating.count} reviews. </p>
                </div>
                <button onClick={()=>navigate(-1)} className="mt-3 w-1/2 rounded px-2 py-1 bg-blue-600 text-white">GO BACK</button>
            </div>

        </>
    )
}
export default UserDetail;