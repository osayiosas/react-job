import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
//  working
import Job from "./components/Job";

import Views from "./components/Views";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>this app</h1>} />)
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
