import React, { useEffect, useState } from "react";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const allApplications = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(allApplications.filter(app => app.applicant === loggedInUser?.email));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-[#1A2A44] mb-6">My Applications</h1>
      {applications.length === 0 ? (
        <p className="text-gray-700">You have not applied to any jobs yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {applications.map((app, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#1A2A44]">{app.title}</h2>
              <p className="text-gray-700">{app.company} - {app.location}</p>
              <p className="text-gray-500 text-sm mt-2">
                Applied on: {new Date(app.appliedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
