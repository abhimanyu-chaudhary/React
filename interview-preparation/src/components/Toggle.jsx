import React, { useState } from "react";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdOutlineToggleOn } from "react-icons/md";

function Toggle() {
  const [state, setState] = useState(true);
  return (
    <div
      className="text-[15rem] cursor-pointer flex items-center justify-center"
      onClick={() => setState(!state)}
    >
      {state ? (
        <MdOutlineToggleOff className="" />
      ) : (
        <MdOutlineToggleOn className="" />
      )}
    </div>
  );
}

export default Toggle;
