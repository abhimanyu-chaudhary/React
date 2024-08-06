import "./App.css";
import Accordion from "./components/Accordion";
import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import Fetch from "./components/FetchAPI";
import FileUploader from "./components/FileUploader";
import Input from "./components/Input";
import List from "./components/List";
import Login from "./components/Login";
import Menu from "./components/Menu";
import RandomQuotes from "./components/RandomQuotes";
import SearchItem from "./components/SearchItem";
import Timer from "./components/Timer";
import Toggle from "./components/Toggle";
import Weather from "./components/Weather";

function App() {
  return(
    <div className="items-center flex justify-center">
      {/* <Accordion /> */}
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <List /> */}
      {/* <Toggle /> */}
      {/* <Background /> */}
      {/* <Timer /> */}
      {/* <Fetch /> */}
      {/* <RandomQuotes /> */}
      {/* <FileUploader /> */}
      {/* <Login /> */}
      {/* <Weather /> */}
      {/* <SearchItem /> */}
      {/* <ColorPicker /> */}
      <Menu />
    </div>
  );
}

export default App;
