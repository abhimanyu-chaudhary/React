import { useState } from "react";
import { useForm } from "react-hook-form";


function Calculators() {

    const { register, handleSubmit } = useForm();
    const [ compoundInterest, setCompoundInterest] = useState(null);

    const onSubmit = (data) => {
        const { principal, time, rate } = data;

        const P = parseFloat(principal);
        const T = parseFloat(time);
        const R = parseFloat(rate)/100 ;

        const A = P * Math.pow((1 + R), T);
        const CI = A - P;

        setCompoundInterest(CI.toFixed(2));
    }


  return (
    <div className="max-w-screen-sm mx-auto flex flex-col gap-5 ">
      <h1 className="text-2xl font-bold text-center mt-3">Compound Interest Calculator</h1>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-0" action="">
          <label className="text-xl font-semibold mb-2">Principal (P)</label>
          <input {...register("principal")}
            className="w-full h-12 text-xl font-semibold mb-4 rounded"
            type="number" required
          />
          
          <div className="w-full flex flex-col">
            <div className="flex gap-64">
                <label className="text-xl font-semibold mb-2">Time (T)</label>
                <label className="text-xl font-semibold mb-2">Time (T)</label>
            </div>
            <div className="flex gap-2">
            <input {...register("time")}
            className="w-1/2 h-12 text-xl font-semibold mb-4 rounded"
            type="number" required
            />
            <input {...register("time")}
            className="w-1/2 h-12 text-xl font-semibold mb-4 rounded"
            type="number" required
            />
            </div>


          </div>

          <label className="text-xl font-semibold mb-2">Rate of Interest (%)</label>
          <input {...register("rate")}
            className="w-full h-12 text-xl font-semibold mb-4 rounded"
            type="number" required
          />
          <button className="w-28 h-12 items-center rounded text-white text-normal font-semibold bg-blue-500" type="submit">Calculate</button>
        </form>
      </div>
        {compoundInterest !== null && ( <div className="p-5 bg-green-400 rounded border border-slate-900">
            <h3 className="text-xl font-semibold">Result:</h3>
            <p className="">Compound Interest: <span className="font-semibold"> Rs.{compoundInterest}</span> </p>
        </div> ) }
        
    </div>
  );
}

export default Calculators;
