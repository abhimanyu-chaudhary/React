import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if(isRegistered){
        if (isRegistered) {
            const user = users.find((user) => user.email === email && user.password === password);
            if(user){
                setIsLoggedIn(true);
            }else{
                alert("Please check the credentials");
            }
        }
    }else{
        const newUser = {email, password};
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        setIsLoggedIn(true);
    }
  }

  return (
    <div className="py-[20%]">
      {isLoggedIn ? (
        <div className="text-3xl flex flex-col gap-10">
          <h1>Hello, {email}</h1>
          <button onClick={() => setIsLoggedIn(false)} className="px-4 py-2 bg-red-500 rounded-lg text-white">Logout</button>
        </div>
      ) : (
        <div>
          <form action="">
            <input
              type="text"
              placeholder="Email Address"
              className="border-2 m-3 h-10"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 m-3 h-10"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 h-10 text-white"
              onClick={handleAuthentication}
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
