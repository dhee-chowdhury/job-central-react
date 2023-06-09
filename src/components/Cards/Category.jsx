import React from "react";

const Category = ({ category }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, category_title, jobs } = category;
  console.log(category_title);
  return (
    <div className="p-2 lg:p-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
      <h1 className="text-xl font-extrabold text-gray-800">{category_title}</h1>
      <p>{jobs}</p>
    </div>
  );
};

export default Category;
