import React, { useState } from "react";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdOutlineToggleOn } from "react-icons/md";

function Toggle() {
  const [state, setState] = useState(true);
  return (
    <div
      className="text-[15rem] w-[15rem] mx-auto cursor-pointer flex items-center justify-center"
      onClick={() => setState(!state)}
    >
      {state ? (
        <MdOutlineToggleOff className="text-blue-00" />
      ) : (
        <MdOutlineToggleOn className="text-red-200" />
      )}
    </div>
  );
}

export default Toggle;
