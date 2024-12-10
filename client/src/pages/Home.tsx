import React from "react";
import Navbar from "../components/Navbar";

import About from "../components/About";
import Call from "../components/Call";

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen dark:bg-black">
      <Navbar />
      <About />
      <Call />
    </div>
  );
};

export default Home;
