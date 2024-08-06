import React, { useState } from 'react'

function Menu() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-slate-950" : "bg-white"} w-screen h-screen`}>
      <div onClick={(e) => setDark(!dark)} className='text-4xl absolute top-0 right-5 cursor-pointer'>{dark ? <span>&#x263D;</span>  : <span className='-rotate-12'>&#x263C;</span> }</div>
      <div className='text-3xl bg-orange-300 px-2 py-1 cursor-pointer' onClick={(e) => setOpen(!open)}>
       &#x2630;
      </div>

      <div className={`${open ? "block" : "hidden"} absolute`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Packages</li>
        <li>Contact</li>
      </div>
    </div>
  )
}

export default Menu
