import React, { useState } from "react";

function Background() {
  const [backColor, setBackColor] = useState("white");

  const colorHandler = (color) => {
    switch (color) {
      case 1:
        setBackColor("bg-red-700");
        break;

      case 2:
        setBackColor("bg-blue-700");
        break;

      case 3:
        setBackColor("bg-yellow-700");
        break;
      case 4:
        setBackColor("bg-orange-700");
        break;
      case 5:
        setBackColor("bg-black");
        break;
      case 6:
        setBackColor("bg-indigo-700");
        break;
        case 7:
        setBackColor("bg-pink-700");
        break;
    }
  };
  return (
    <div className={`w-screen h-screen ${backColor}`}>
      <div className="max-w-screen-lg mx-auto flex justify-center gap-4 pt-[50vh]">
        <button
          className="px-3 py-2 rounded-lg border-2 min-w-20"
          onClick={() => colorHandler(1)}
        >
          Red
        </button>
        <button
          className="px-3 py-2 rounded-lg border-2 min-w-20"
          onClick={() => colorHandler(2)}
        >
          Blue
        </button>
        <button
          className="px-3 py-2 rounded-lg border-2 min-w-20"
          onClick={() => colorHandler(3)}
        >
          Yellow
        </button>
        <button
          className="px-3 py-2 rounded-lg border-2 min-w-20"
          onClick={() => colorHandler(4)}
        >
          Orange
        </button>
        <button
          className="px-3 py-2 rounded-lg border-2 min-w-20"
          onClick={() => colorHandler(5)}
        >
          Black
        </button>
        <button
          className="px-3 py-2 rounded-lg border-2 min-w-20"
          onClick={() => colorHandler(6)}
        >
          Indigo
        </button>
        <button
          className="px-3 py-2 rounded-lg border-2 min-w-20"
          onClick={() => colorHandler(7)}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default Background;
