import Nav from "./Nav";
import "./../../App.css";
import Work from "./Work";
import Stripes from "./Stripes";
import Products from "./Products";
import Marquees from "./Marquees";
import Cards from "./Cards";
import Footer from "./Footer";

function WorkPage(){
    return(
        <div className="w-screen h-full bg-zinc-950 text-white satoshi">
            <Work />
            <Stripes />
            <Products />
            <Marquees />
            <Cards />
            <Footer />
        </div>
    )
}
export default WorkPage;