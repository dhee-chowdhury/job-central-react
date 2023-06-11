import React, { useContext, useState } from "react";
import { AppliedJobsContext } from "../App";
import Job from "./Cards/Job";
import AppliedJob from "./Cards/AppliedJob";

const AppliedJobs = () => {
  const savedJobs = useContext(AppliedJobsContext || []);
  console.log(savedJobs);
  const [appliedJobs, setAppliedJobs] = useState(savedJobs);

  const handleShowAllJobs = () => {
    setAppliedJobs(savedJobs);
  };
  const handleShowRemoteJobs = () => {
    const remoteJobs = savedJobs.filter((sj) => sj.job_location === "remote");
    if (remoteJobs) {
      setAppliedJobs(remoteJobs);
    }
  };

  const handleShowOnsiteJobs = () => {
    const onSiteJobs = savedJobs.filter((sj) => sj.job_location === "onsite");
    if (onSiteJobs) {
      setAppliedJobs(onSiteJobs);
    }
  };
  return (
    <div className="my-container">
      <div className="flex gap-5 justify-end mb-4 lg:mb-8">
        <button onClick={handleShowAllJobs} className="btn-outlined">
          All jobs
        </button>
        <button onClick={handleShowRemoteJobs} className="btn-outlined">
          Remote jobs
        </button>
        <button onClick={handleShowOnsiteJobs} className="btn-outlined">
          Onsite jobs
        </button>
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
