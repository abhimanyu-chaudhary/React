import React, { useState } from 'react'

function Input() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    }
  return (
    <div className='flex flex-col items-center justify-center'>
        <input type="text" className='w-80 h-10 border-2' onChange={(e) => handleChange(e) } />
        <h1>{name}</h1>
        
    </div>
  );
}

export default Input;
