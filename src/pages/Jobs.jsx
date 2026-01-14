import React, { useState } from "react";

export default function Jobs() {
  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Nairobi" },
    { id: 2, title: "Backend Developer", company: "Code Labs", location: "Mombasa" },
    { id: 3, title: "UI/UX Designer", company: "Design Studio", location: "Kisumu" },
  ]);

  const handleApply = (job) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return alert("Please login to apply.");

    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push({ ...job, applicant: loggedInUser.email, appliedAt: new Date() });
    localStorage.setItem("applications", JSON.stringify(applications));
    alert(`Applied to ${job.title} at ${job.company}`);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-[#1A2A44] mb-6">Available Jobs</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map(job => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#1A2A44]">{job.title}</h2>
              <p className="text-gray-700">{job.company} - {job.location}</p>
            </div>
            <button
              onClick={() => handleApply(job)}
              className="mt-4 bg-[#1A2A44] hover:bg-[#274AB3] text-white py-2 px-4 rounded transition-colors duration-300"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
