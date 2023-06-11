import { getStoredJobs } from "../../utils/fakeDB";

export const categoryAndJobs = async () => {
  const categoryData = await fetch("jobCategoryList.json");
  const jobCategory = await categoryData.json();

  const jobsData = await fetch("jobs.json");
  const allJobs = await jobsData.json();

  const savedJobs = getStoredJobs();

  return { jobCategory, allJobs, savedJobs };
};
