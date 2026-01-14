import React from "react";
import { useNavigate } from "react-router-dom";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "TechCorp" },
  { id: 2, title: "Backend Developer", company: "DataSolutions" },
  { id: 3, title: "Full Stack Developer", company: "Innovate Labs" },
  { id: 4, title: "React Developer", company: "PixelWorks" },
  { id: 5, title: "Software Engineer", company: "CloudNine" },
  { id: 6, title: "Mobile App Developer", company: "Appify" },
  { id: 7, title: "Data Analyst", company: "Insight Analytics" },
  { id: 8, title: "DevOps Engineer", company: "InfraTech" },
  { id: 9, title: "UI/UX Designer", company: "DesignHub" },
  { id: 10, title: "QA Engineer", company: "QualityFirst" },
  { id: 11, title: "Product Manager", company: "Visionary Products" },
  { id: 12, title: "Junior Software Developer", company: "StartupX" },
];

export default function Jobs() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="text-3xl font-bold mb-8 text-[#1A2A44]">
        Available Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-[#1A2A44]">
                {job.title}
              </h2>
              <p className="text-gray-500 mt-1">
                {job.company}
              </p>
            </div>

            <button
              onClick={() =>
                navigate("/applications/new", { state: job })
              }
              className="mt-6 bg-[#0077B6] hover:bg-[#005f8f] text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
