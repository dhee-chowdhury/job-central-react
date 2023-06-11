export const categoryAndJobs = async () => {
  const categoryData = await fetch("jobCategoryList.json");
  const jobCategory = await categoryData.json();

  const jobsData = await fetch("jobs.json");
  const initialJobs = await jobsData.json();

  return { jobCategory, initialJobs };
};
