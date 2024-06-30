import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(userData);
    setUserData({
      email: "",
      password: "",
    });
    // Call API or navigate to next page here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="loginUsername"
              >
                Email
              </label>
              <input
                className="input input-bordered w-full"
                id="email"
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="loginPassword"
              >
                Password
              </label>
              <input
                className="input input-bordered w-full"
                id="password"
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <div
              className="text-gray-700 mb-2 cursor-pointer hover:text-black"
              onClick={() => navigate("/register")}
            >
              Don't Have An Account?
            </div>
            <div className="flex items-center justify-between">
              <button
                className="btn btn-secondary w-full"
                type="submit"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
