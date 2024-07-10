import MainBody from "./MainBody";
import Nav from "./Nav";

function Front(){
    return(
        <div className="flex ">
           <div className=" w-[20%] h-screen bg-zinc-300">
                <Nav />
           </div>
            <div className=" w-[80%] h-screen ">
                 <MainBody />
            </div>
        </div>
    )
}

export default Front;