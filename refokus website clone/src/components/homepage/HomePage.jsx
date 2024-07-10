import Marquees from "../workpage/Marquees";
import Stripes from "../workpage/Stripes";
import Footer from "../workpage/Footer";
import "./../../App.css";
import Front from "./Front";
import Websites from "./Websites";
import Banners from "./Banners";
import Forwards from "./Forwards";
import HomeCards from "./HomeCards";
import Testimonials from "./Testimonials";
import Cards from "../workpage/Cards";

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
            <Cards title="Up Next: Project" matter="Projects & Case Studies" texts="Web Design, Webflow Development, and Creative Development" />
            <Footer />
        </div>
    )
}
export default HomePage;