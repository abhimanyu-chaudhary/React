import { BsArrowReturnRight } from "react-icons/bs";

function Button({title = "Start a Project"}){
    return(
        <div>
            <button className="px-5 py-2 flex justify-center items-center text-sm gap-2 bg-zinc-200 rounded-full text-black">
                <h2>{title}</h2>
                <BsArrowReturnRight className="text-xs font-extrabold" />
            </button>
        </div>
    )
}

export default Button;