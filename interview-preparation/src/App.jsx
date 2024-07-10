import { useState } from "react";
import "./App.css";

function App() {
  const [accData, setAccData] = useState([
    {
      id: 1,
      header: "Are you 18+?",
      desc: "Only the 18+ people are allowed to join this program",
      toggle: false,
    },
    {
      id: 2,
      header: "Have you qualified the test exam?",
      desc: "At least B+ ranking is needed.",
      toggle: false,
    },
    {
      id: 3,
      header: "Are you day scholar",
      desc: "Only day scholar is eligible.",
      toggle: false,
    },
  ]);

  const toggleAccordion = (id) => {
    setAccData((prev) => 
      prev.map((acc) => 
          acc.id === id ? {...acc, toggle: !acc.toggle} : {...acc, toggle: false}
      )
    )
  }

  return (
    <div className="max-w-screen-md mx-auto mt-20 flex flex-col gap-5">
      {accData.map((acc) => {
        return (
          <>
            <div
              className="w-[30rem] px-5 py-4 border-2"
              onClick={() => toggleAccordion(acc.id) }
            >
              {acc.id}. {acc.header} 
            </div>
            <span className={acc.toggle && ` w-[30rem] p-5 bg-slate-300`}>
              {acc.toggle && acc.desc}
            </span>
          </>
        );
      })}
    </div>
  );
}

export default App;
