import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.some(u => u.email === email);
    if (userExists) {
      setError("Email already registered.");
      return;
    }

    // Add new user
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully! Redirecting to login...");
    setError("");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#1A2A44]">Sign Up</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
        />
        <button
          type="submit"
          className="bg-[#1A2A44] hover:bg-[#274AB3] text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
