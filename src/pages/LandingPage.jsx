import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E0E7FF] flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[#1A2A44] text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Career Tracker
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Find jobs, track your applications, and land your dream career — all in one place.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-[#00B4D8] hover:bg-[#0077B6] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A2A44]">
          Why Career Tracker?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Find Jobs</h3>
            <p>
              Browse thousands of job listings curated to your skills and interests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Track Applications</h3>
            <p>
              Keep all your job applications organized in one place and track your progress.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Get Notified</h3>
            <p>
              Receive notifications on new job openings and application updates.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Footer Section */}
      <section className="mt-auto py-12 bg-[#1A2A44] text-white text-center">
        <p className="mb-4 text-lg">
          Ready to start your journey?
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-[#00B4D8] hover:bg-[#0077B6] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Sign Up Now
        </button>
      </section>
    </div>
  );
}
