import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import { categoryAndJobs } from "./components/loaders/categoryAndJobs.js";
import ViewDetails from "./components/ViewDetails.jsx";
import { jobDetails } from "./components/loaders/jobDetails.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: categoryAndJobs,
      },
      {
        path: "/:jobId",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => jobDetails(params.jobId),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
