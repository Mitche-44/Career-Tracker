import React, { useEffect, useState } from "react";
import { getApplications } from "../utils/storage";

export default function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(getApplications());
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>

      {apps.length === 0 && (
        <p className="text-gray-500">No applications yet.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {apps.map(app => (
          <div key={app.id} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{app.job}</h2>
            <p className="text-gray-600">{app.company}</p>
            <span className="text-sm text-blue-600">
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
