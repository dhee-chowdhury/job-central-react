import React from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Assignment_1", obtained_marks: 48, total_marks: 50 },
    { name: "Assignment_2", obtained_marks: 49, total_marks: 50 },
    { name: "Assignment_3", obtained_marks: 50, total_marks: 50 },
    { name: "Assignment_4", obtained_marks: 60, total_marks: 60 },
    { name: "Assignment_5", obtained_marks: 47, total_marks: 50 },
    { name: "Assignment_6", obtained_marks: 58, total_marks: 60 },
    { name: "Assignment_7", obtained_marks: 60, total_marks: 60 },
    { name: "Assignment_8", obtained_marks: 30, total_marks: 30 },
  ];
  return (
    <div className="my-container">
      <div>
        <h1 className="title-text text-3xl font-extrabold">Assignment Marks</h1>
      </div>
      <div>
        <BarChart width={1200} height={500} data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis dataKey="total_marks" />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />

          <Bar dataKey="obtained_marks" fill="#9873FF" />
          <Bar dataKey="total_marks" fill="#7E90FE" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
