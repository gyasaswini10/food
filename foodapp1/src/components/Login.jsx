import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Perform login logic here (e.g., API call)
    console.log("Login submitted:", form);

    // Simulate a successful login
    // Replace this with your actual authentication logic
    if (form.username && form.password) {
      // Redirect to Home.jsx
      navigate("/home"); // Make sure "/home" matches your route in App.js
    } else {
        alert("Please enter both username and password");
    }
  };

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }

        .main {
          max-width: 400px;
          margin: 80px auto;
          padding: 30px;
          border-radius: 12px;
          background-color: #fff;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .main h3 {
          margin-bottom: 25px;
          color: #333;
        }

        label {
          display: block;
          text-align: left;
          margin: 12px 0 6px;
          color: #555;
          font-weight: bold;
        }

        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 12px;
          margin-bottom: 18px;
          border: 1px solid #ddd;
          border-radius: 6px;
          box-sizing: border-box;
        }

        .wrap {
          text-align: center;
        }

        .login-button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background-color: #FF6347;
          color: white;
          font-size: 17px;
          cursor: pointer;
        }

        .login-button:hover {
          background-color: #e5533e;
        }

        p {
          margin-top: 25px;
        }

        a {
          color: #FF6347;
          text-decoration: none;
        }
      `}</style>

      <div className="main">
        <h3>Enter your login credentials</h3>

        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="wrap">
            <button type="button" className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>

        <p>
          Not registered?{" "}
          <Link to="/register" style={{ textDecoration: "none", color: "#FF6347" }}>
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
