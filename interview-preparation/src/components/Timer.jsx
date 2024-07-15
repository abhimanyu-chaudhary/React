import React from 'react'

function Timer() {
  return (
    <div className='flex flex-col gap-20 pt-20'>
      <div className='flex text-9xl font-semibold justify-center gap-4'>
        <h1>0</h1> :
        <h1>0</h1> :
        <h1>0</h1> 
      </div>
      <button className='mx-auto w-40 px-3 py-2 border-2 rounded-lg'>START</button>
    </div>
  )
}

export default Timer
