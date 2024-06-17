import Nav from "./components/Nav";
import "./App.css"
import Work from "./components/Work";

function App(){
  return(
    <div className="w-screen h-screen bg-zinc-950 text-white satoshi">
        <Nav />
        <Work />
    </div>
  )
}

export default App;