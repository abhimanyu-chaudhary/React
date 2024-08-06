import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState("#000000");
    const handleChange = (e) => {
        setColor(e.target.value)
    }
  return (
    <div>
        hi
      <input type="color" onChange={handleChange} />
      <div className='w-[25rem] h-[25rem] mt-20' style={{background:color}}>
        {color}
      </div>
    </div>
  )
}

export default ColorPicker;
