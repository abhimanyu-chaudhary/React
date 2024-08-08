import React from 'react'

function ImageExpand() {
  return (
    <div className='flex items-center'>
      <div className='h-[100vh] flex items-center transition-all ease-in-out delay-500'>
        <img className='h-[90%] w-[10vw] object-cover hover:w-[20vw]' src="https://i.pinimg.com/736x/79/01/20/790120cbb699db15324913f6db0193f0.jpg" alt="" />
      </div>
      <div className='h-[100vh] flex items-center'>
        <img className='h-[90%] w-[10vw] object-cover hover:w-[20vw]' src="https://i.pinimg.com/236x/62/6e/5d/626e5d901d724e618abd37dab91e0945.jpg" alt="" />
      </div>
      <div className='h-[100vh] flex items-center'>
        <img className='h-[90%] w-[10vw] object-cover hover:w-[20vw]' src="https://i.pinimg.com/236x/e2/1e/1e/e21e1e6c6d6c1e712de14547d2603cc9.jpg" alt="" />
      </div>
      <div className='h-[100vh] flex items-center'>
        <img className='h-[90%] w-[10vw] object-cover hover:w-[20vw]' src="https://i.pinimg.com/236x/6f/07/2b/6f072b7a06382b59c2d5b7e6a4d5e325.jpg" alt="" />
      </div>
      <div className='h-[100vh] flex items-center'>
        <img className='h-[90%] w-[10vw] object-cover hover:w-[20vw]' src="https://i.pinimg.com/236x/aa/72/f1/aa72f1e5136f5967583246988037fec0.jpg" alt="" />
      </div>
    </div>
  )
}

export default ImageExpand
