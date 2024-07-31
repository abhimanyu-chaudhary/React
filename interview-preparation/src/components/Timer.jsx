import React, { useEffect, useRef, useState } from "react";

function Timer() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [miniSecond, setMiniSecond] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if(intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setMiniSecond((prevMiniSecond) => {
        if(prevMiniSecond >= 9){
          setSecond((prevSecond) => {
            if(prevSecond >= 59){
              setMinute((prevMinute) => {
                if(prevMinute >= 59){
                  setHour((prevHour) => prevHour + 1);
                  return 0;
                }
                return prevMinute + 1;
              })
              return 0;
            }
            return prevSecond + 1;
          })
          return 0;
        }
        return prevMiniSecond + 1;
      })
    },100);
  };

  const stopTimer = () => {
    if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const resetTimer = () => {
    stopTimer();
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMiniSecond(0);
  }

  return (
    <div className="flex flex-col gap-20 pt-20">
      <div className="flex text-9xl font-semibold justify-center items-center text-center gap-4 ">
        <h1 className="w-32">{hour}</h1> :<h1 className="w-32">{minute}</h1> :<h1 className="w-32">{second}</h1> : <h4 className="w-32">{miniSecond}</h4>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <button
          className="w-40 px-3 py-2 border-2 rounded-lg bg-green-500 font-semibold"
          onClick={startTimer}
        >
          START
        </button>
        <button
          className="w-40 px-3 py-2 border-2 rounded-lg bg-red-500 font-semibold"
          onClick={stopTimer}
        >
          STOP
        </button>
        <button
          className="w-40 px-3 py-2 border-2 rounded-lg bg-blue-500 font-semibold"
          onClick={resetTimer}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Timer;
