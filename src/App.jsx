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



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* other routes go here */}
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/jobs/:id" element={<JobPageSingle />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
