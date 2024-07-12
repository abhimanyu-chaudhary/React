import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(value + 1);
  }

  const handleDecrease = () => {
    setValue(value - 1);
  }
  
  return (
    <>
      <div className="max-w-screen-md mx-auto items-center justify-center mt-[50vh] -translate-y-[50%] flex flex-col gap-5">
        <h1 className="font-bold text-2xl">{value}</h1>
        <div className="flex gap-5">
          <button className="px-3 py-2 text-xl  rounded-md bg-blue-600" onClick={() => handleIncrease()}>
            Increment
          </button>
          <button className="px-3 py-2 text-xl  rounded-md bg-red-600" onClick={() => handleDecrease()}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
