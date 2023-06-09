export const jobDetails = async (id) => {
  console.log(id);
  const jobsData = await fetch("jobs.json");
  const jobs = await jobsData.json();
  console.log(jobs);
  const job = jobs.find((job) => job._id === id);
  console.log(job);
  return job;
};
