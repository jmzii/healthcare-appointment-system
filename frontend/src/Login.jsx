import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      console.error("Make sure to fill both fields!");
      toast.error("Login failed. Input username and password.");
      return;
    }

    // API request
    fetch("http://localhost:3001/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Login successful.");
          setUsername("");
          setPassword("");
        } else if (response.status === 401) {
          toast.error("Login failed, wrong credentials.");
        } else {
          toast.error("Login failed. Please try again after some time.");
        }
      })
      .catch((error) => {
        console.error("Login error: ", error);
        toast.error("Login error. Please try again after some time.");
      });
  };

  return (
    <div>
      <h3>Login</h3>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
