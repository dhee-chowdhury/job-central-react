import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "./Cards/Category";

const Home = () => {
  const jobCategory = useLoaderData();
  console.log(jobCategory);
  return (
    <div>
      <section className="my-container md:flex items-center justify-between">
        <div className="flex flex-col justify-between lg:h-[423px]">
          <h1 className="font-extrabold text-3xl lg:text-7xl mb-2 object-cover">
            Drawing Closer <br />
            to the Job of <br />
            <span className="title-text">Your Dreams</span>
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Discover a vast array of career possibilities, spanning numerous
            <br />
            industries and roles, accompanied by insights. Unleash the potential
            <br />
            of your future and embark on a journey to secure your dream job.
          </p>

          <Link to="/">
            <button className="btn-primary mt-2 md:mt-auto">Get started</button>
          </Link>
        </div>
        <img
          className="object-cover mx-auto md:mx-0"
          src="/src/assets/professional_3.png"
          alt="professional"
        />
      </section>
      <section className="my-container">
        <div className="text-center mb-2">
          <h1 className="font-extrabold text-3xl lg:text-5xl mb-2">
            Job Category List
          </h1>
          <p className="text-gray-700 text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="text-center md:text-start md:flex items-start justify-between">
          {jobCategory.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
