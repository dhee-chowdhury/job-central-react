import React, { useContext, useState } from "react";
import { AppliedJobsContext } from "../App";

const AppliedJobs = () => {
  const savedJobs = useContext(AppliedJobsContext || []);
  const [appliedJobs, setAppliedJobs] = useState(savedJobs);
  return (
    <div>
      <h1>Applied jobs: {appliedJobs.length}</h1>
      <p>more content coming</p>
    </div>
  );
};

export default AppliedJobs;
