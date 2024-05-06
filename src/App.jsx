import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./screen/HomePage";
import JobsPage from "./screen/JobsPage";
import NotFound from "./layout/NotFound";
import JobPageSingle, { jobLoader } from "./screen/JobPageSingle";
import AddJobPage from "./screen/AddJobPage";
import EdithJobPage from "./screen/EdithJobPage";


// new job loader
const App = () => {
  const addJob  = async (newJob) => {
    await fetch('/api/jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
  };


  //delete existing jobs

  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  //update existing jobs
  const updatejob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
  };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* other routes go here */}
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route
        path="/edit-job/:id"
        element={<EdithJobPage updatedJobSubmit={updatejob}/>}
        loader={jobLoader}
      />
      <Route
        path="/jobs/:id"
        element={<JobPageSingle deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

  return <RouterProvider router={router} />;
};

export default App;
