export const jobDetails = async (id) => {
  const jobsData = await fetch("jobs.json");
  const jobs = await jobsData.json();
  console.log(jobs);
  const job = jobs.find((job) => job._id === id);
  return job;
};
