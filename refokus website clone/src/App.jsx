import "./App.css"
import LocomotiveScroll from 'locomotive-scroll';
import WorkPage from "./components/workpage/WorkPage";
import HomePage from "./components/homepage/HomePage";
import Routing from "./components/Routing";


function App(){
  const locomotiveScroll = new LocomotiveScroll();

  return(
    <div className="w-screen h-full text-white satoshi">
        <Routing />
    </div>
  )
}

export default App;