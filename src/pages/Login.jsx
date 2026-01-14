import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      alert("Invalid email or password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-[#1A2A44]">Login</h1>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#00B4D8] hover:bg-[#0096C7] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#00B4D8] hover:underline">
          Signup
        </Link>
      </p>
    </div>
  );
}
