import React, { useEffect, useState } from "react";
import { getApplications } from "../utils/storage";

export default function Dashboard() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(getApplications());
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#1A2A44] mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat title="Total Applications" value={apps.length} />
        <Stat
          title="Pending"
          value={apps.filter(a => a.status === "Pending").length}
        />
        <Stat
          title="Reviewed"
          value={apps.filter(a => a.status === "Reviewed").length}
        />
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold text-[#0077B6]">{value}</h2>
    </div>
  );
}
