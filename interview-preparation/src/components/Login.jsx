import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className='py-[20%]'>
      <form action="">
        <input type="text" placeholder='Email Address' className='border-2 m-3 h-10' />
        <input type="password" placeholder='Password' className='border-2 m-3 h-10' />
        <button type='submit' className='px-4 py-1 bg-blue-500 h-10 text-white'>{isRegistered ? "Login" : "Register"}</button>
      </form>
      <div className='flex gap-10 items-center m-3 mt-10'>
        {isRegistered ? "Don't have a account? Register Now!" : "Already have a account? Login Here!"}
        <button className='px-4 py-1 bg-blue-500 h-10 text-white'>{isRegistered ? "Register" : "Login"}</button>
      </div>
    </div>
  )
}

export default Login;
