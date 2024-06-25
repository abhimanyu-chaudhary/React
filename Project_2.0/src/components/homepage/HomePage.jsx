import Marquees from "../workpage/Marquees";
import Stripes from "../workpage/Stripes";
import "./../../App.css";
import Front from "./Front";
import Websites from "./Websites";
import Banners from "./Banners";
import Forwards from "./Forwards";
import HomeCards from "./HomeCards";
import Testimonials from "./Testimonials";

function HomePage(){
    return(
        <div className="h-full bg-zinc-950 pt-20 text-white satoshi">
            <Front />
            <Marquees />
            <Websites />
            <Stripes />
            <Banners />
            <Forwards />
            <HomeCards />
            <Testimonials />
        </div>
    )
}
export default HomePage;