import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import { categoryAndJobs } from "./components/loaders/categoryAndJobs.js";
import ViewDetails from "./components/ViewDetails.jsx";
import { jobDetails } from "./components/loaders/jobDetails.js";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: categoryAndJobs,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:jobId",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => jobDetails(params.jobId),
      },
      {
        path: "/appliedJobs",
        element: <h1>hello from applied jobs</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);
