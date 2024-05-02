import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

 import HomeCards from "./components/HomeCards";

//  working 


import Job from "./components/Job";

import Views from "./components/Views";



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />


      {/*  */}
      <Job />
      <Views />
    </>
  );
};

export default App;
