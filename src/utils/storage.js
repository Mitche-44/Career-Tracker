export const getApplications = () =>
  JSON.parse(localStorage.getItem("applications")) || [];

export const saveApplications = (apps) =>
  localStorage.setItem("applications", JSON.stringify(apps));
