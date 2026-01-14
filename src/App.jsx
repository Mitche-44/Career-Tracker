import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AddApplication from "./pages/AddApplication";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) setLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />

      <div className="bg-[#F5F7FA] min-h-screen p-6">
        <Routes>
          {/* Landing page is always accessible */}
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/dashboard" /> : <LandingPage />}
          />

          {/* Public authentication pages */}
          {!loggedIn && (
            <>
              <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}

          {/* Protected routes */}
          {loggedIn && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/applications" element={<Dashboard />} />
              <Route path="/applications/new" element={<AddApplication />} />
              <Route path="/about" element={<About />} />
            </>
          )}

          {/* Catch-all route */}
          <Route
            path="*"
            element={
              loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/" />
            }
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
