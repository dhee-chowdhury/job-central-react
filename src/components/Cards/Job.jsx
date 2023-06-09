/* eslint-disable react/prop-types */
import React from "react";

const Job = ({ job }) => {
  const {
    _id,
    salary,
    company_logo,
    job_title,
    job_type,
    job_location,
    company_name,
    location,
  } = job;
  return (
    <div className="rounded-lg border border-gray-100 p-2 lg:p-10 shadow-md mb-4 lg:mb-0">
      <img className="w-16 h-12object-contain" src={company_logo} alt="" />
      <h1>{job_title}</h1>
      <p>{company_name}</p>
      <div className="inline-flex title-text">
        <p className="p-2 border border-gray-500 shadow-sm rounded mr-2">
          {job_location}
        </p>
        <p className="p-2 border border-gray-500 shadow-sm rounded">
          {job_type}
        </p>
      </div>
    </div>
  );
};

export default Job;
