import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const job = useLoaderData();
  const {
    job_title,
    job_description,
    job_responsibility,
    experience,
    salary,
    phone,
    email,
    address,
    education_requirement,
  } = job;
  console.log(job);
  return (
    <div className="my-container">
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-extrabold">Job Description: </span>
          <span className="text-gray-600 text-lg">{job_description}</span>
        </p>
        <p>
          <span className="font-extrabold">Job Responsibility: </span>
          <span className="text-gray-600 text-lg">{job_responsibility}</span>
        </p>
        <p>
          <span className="font-extrabold">Educational Requirement: </span>
          <span className="text-gray-600 text-lg">{education_requirement}</span>
        </p>
        <p>
          <span className="font-extrabold">Experience: </span>
          <span className="text-gray-600 text-lg">
            {experience} in this field
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default ViewDetails;
