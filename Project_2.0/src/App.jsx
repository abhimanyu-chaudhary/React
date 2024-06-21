import Nav from "./components/Nav";
import "./App.css"
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";

function App(){
  return(
    <div className="w-screen h-full bg-zinc-950 text-white satoshi m-0 p-0">
        <Nav />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
    </div>
  )
}

export default App;