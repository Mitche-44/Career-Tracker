import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getApplications, saveApplications } from "../utils/storage";

export default function AddApplication() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [job, setJob] = useState(state?.title || "");
  const [company, setCompany] = useState(state?.company || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const apps = getApplications();
    apps.push({
      id: Date.now(),
      job,
      company,
      status: "Pending",
    });

    saveApplications(apps);
    navigate("/applications");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">New Application</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="Job Title"
          className="w-full border p-3 rounded"
          required
        />

        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="w-full border p-3 rounded"
          required
        />

        <button className="bg-[#0077B6] text-white px-6 py-3 rounded-lg">
          Save Application
        </button>
      </form>
    </div>
  );
}
