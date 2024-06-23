import "./../../index.css";
import Button from "./Button";

function Nav(){
    return(
        <div className="max-w-screen-xl mx-auto py-5 bg-zinc-950 flex items-center justify-between  border-b-[.2px]">
            <div className=" flex items-center">
                <img className="mr-20" src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className="flex gap-14 ">
                    {["Home", "Work", "About", "News", "Careers"].map((elem, index)=> {
                    return <a key={index} className="text-sm" href="#">
                            {elem}
                        </a>
                    })}
                </div>
            </div>

            <Button />
            
        </div>
    )
}
export default Nav;