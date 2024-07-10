import "./App.css"
import LocomotiveScroll from 'locomotive-scroll';
import WorkPage from "./components/WorkPage";

function App(){
  const locomotiveScroll = new LocomotiveScroll();

  return(
    <div className="w-screen h-full bg-zinc-950 text-white satoshi">
        <WorkPage />
    </div>
  )
}

export default App;