import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const JobsContext = createContext([]);
export const CategoryContext = createContext([]);
export const AppliedJobsContext = createContext([]);

const App = () => {
  const { jobCategory, initialJobs } = useLoaderData();
  const [jobs, setJobs] = useState(initialJobs.slice(0, 4));
  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      <CategoryContext.Provider value={jobCategory}>
        <Header></Header>
        <Outlet></Outlet>
      </CategoryContext.Provider>
    </JobsContext.Provider>
  );
};

export default App;
