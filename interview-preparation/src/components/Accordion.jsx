import { useEffect, useState } from "react";

function Accordion() {
  const [accData, setAccData] = useState([
    {
      id: 1,
      header: "Are you 18+?",
      desc: "Only the 18+ people are allowed to join this program",
      toggle: false,
      check: false,
    },
    {
      id: 2,
      header: "Have you qualified the test exam?",
      desc: "At least B+ ranking is needed.",
      toggle: false,
      check: false,
    },
    {
      id: 3,
      header: "Are you day scholar",
      desc: "Only day scholar is eligible.",
      check: false,
      toggle: false,
    },
  ]);

  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    const allChecked = accData.every((acc) => acc.check);
    setSubmitEnabled(allChecked);
  }, [accData]);

  const toggleAccordion = (id) => {
    setAccData((prev) => 
      prev.map((acc) => 
          acc.id === id ? {...acc, toggle: !acc.toggle} : {...acc, toggle: false}
      )
    )
  }

  const handleCheckBox = (id) => {
    setAccData((prev) => 
      prev.map((acc) => 
        acc.id === id ? {...acc, check: !acc.check}: acc
    ))
  }

  return (
    <div className="max-w-screen-md mx-auto mt-20 flex flex-col items-center gap-5">
      {accData.map((acc) => {
        return (
          <div className="flex gap-2">
            <input type="checkbox" checked={acc.check} onClick={() => handleCheckBox(acc.id)}/>
            <div>
              <div
                  className="w-[30rem] px-5 py-4 border-2 mb-7"
                  onClick={() => toggleAccordion(acc.id) }
                >
                  {acc.id}. {acc.header} 
                </div>
              
              <span className={acc.toggle && `w-[30rem] p-5 bg-slate-300`}>
                {acc.toggle && acc.desc}
              </span>
            </div>
          </div>
        );
      })}
      <button className={`-mr-6 mt-5 w-[30rem] px-3 py-2 ${submitEnabled ? "bg-blue-600" : "bg-gray-500"}`} disabled={!submitEnabled}>Submit</button>
    </div>
  );
}

export default Accordion;
