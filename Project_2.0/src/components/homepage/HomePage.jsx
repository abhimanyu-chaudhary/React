import Marquees from "../workpage/Marquees";
import "./../../App.css";
import Front from "./Front";
import Websites from "./Websites";

function HomePage(){
    return(
        <div className="h-full bg-zinc-950 pt-20 text-white satoshi">
            <Front />
            <Marquees />
            <Websites />
        </div>
    )
}
export default HomePage;