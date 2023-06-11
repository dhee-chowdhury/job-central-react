import React, { useContext, useState } from "react";
import { AppliedJobsContext } from "../App";
import Job from "./Cards/Job";
import AppliedJob from "./Cards/AppliedJob";

const AppliedJobs = () => {
  const savedJobs = useContext(AppliedJobsContext || []);
  console.log(savedJobs);
  const [appliedJobs, setAppliedJobs] = useState(savedJobs);
  return (
    <div className="my-container">
      <div className="flex gap-5 justify-end mb-4 lg:mb-8">
        <button className="btn-outlined">All jobs</button>
        <button className="btn-outlined">Remote jobs</button>
        <button className="btn-outlined">Onsite jobs</button>
      </div>
      <div>
        {appliedJobs.map((job) => (
          <AppliedJob key={job._id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
