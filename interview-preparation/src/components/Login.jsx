import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="py-[20%]">
      {isLoggedIn ? (
        <div className="text-3xl flex flex-col gap-10">
          <h1>Hello, {email}</h1>
          <button className="px-4 py-1 bg-blue-500 h-10 text-white">Logout</button>
        </div>
      ) : (
        <div>
          <form action="">
            <input
              type="text"
              placeholder="Email Address"
              className="border-2 m-3 h-10"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 m-3 h-10"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 h-10 text-white"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          <div className="flex gap-10 items-center m-3 mt-10">
            {isRegistered
              ? "Don't have a account? Register Now!"
              : "Already have a account? Login Here!"}
            <button
              onClick={() => setIsRegistered(!isRegistered)}
              className="px-4 py-1 bg-blue-500 h-10 text-white"
            >
              {isRegistered ? "Register" : "Login"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
