import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    repassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.password !== form.repassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", form);
    // Add API call here if needed

    // Simulate successful registration and redirect to login
    navigate("/login"); // Navigate to the Login route
  };

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .main {
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          padding: 20px;
          width: 400px;
          margin: 50px auto;
        }

        .main h2 {
          color: #FF6347;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #555;
          font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          margin-bottom: 12px;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .register-button {
          padding: 12px;
          border-radius: 10px;
          border: none;
          background-color: #FF6347;
          color: white;
          cursor: pointer;
          width: 100%;
          font-size: 16px;
        }
        .register-button:hover{
            background-color: #e5533e;
        }
      `}</style>

      <div className="main">
        <h2>Registration Form</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            name="first"
            value={form.first}
            onChange={handleChange}
            required
          />

          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            id="last"
            name="last"
            value={form.last}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
            title="Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long"
            required
          />

          <label htmlFor="repassword">Re-type Password:</label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            value={form.repassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
