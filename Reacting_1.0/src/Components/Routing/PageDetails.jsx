import { useNavigate, useParams } from "react-router-dom";

function PageDetails(){
    const {name} = useParams();
    const navigate = useNavigate();

    const GoBackHandler = ()=>{
        navigate("/about");
    }
    return(
        <>
            <div className="w-full text-3xl font-extrabold flex justify-center mt-20 ">
                <h1>Our Website</h1>
            </div>
            <div className="flex flex-col mt-5 gap-10 m-auto w-1/2">
                <p className="px-3 py-1 bg-red-600 text-2xl font-semibold">This is our {name.toUpperCase()} page. </p>
                <button onClick={GoBackHandler} className="px-3 py-2 bg-blue-700 rounded-md text-white font-semibold">Go Back</button>   
            </div>
        </>
    )
}
export default PageDetails;