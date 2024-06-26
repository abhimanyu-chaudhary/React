import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Calculator() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [compoundInterest, setCompoundInterest] = useState(null);

    const onSubmit = (data) => {
        const { principal, time, rate } = data;

        const P = parseFloat(principal);
        const t = parseFloat(time);
        const r = parseFloat(rate) / 100;

        // Calculate compound interest
        const A = P * Math.pow((1 + r), t);
        const CI = A - P;

        setCompoundInterest(CI.toFixed(2));
    };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Compound Interest Calculator</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Principal (P):</label>
          <input
            type="number"
            {...register("principal", { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.principal && <p className="text-red-500 text-sm">This field is required</p>}
        </div>
        <div>
          <label className="block mb-1">Time (t in years):</label>
          <input
            type="number"
            {...register("time", { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.time && <p className="text-red-500 text-sm">This field is required</p>}
        </div>
        <div>
          <label className="block mb-1">Interest Rate (r in %):</label>
          <input
            type="number"
            {...register("rate", { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.rate && <p className="text-red-500 text-sm">This field is required</p>}
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Calculate
        </button>
      </form>
      {compoundInterest !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="text-lg font-semibold">Result:</h3>
          <p>Compound Interest: ${compoundInterest}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
