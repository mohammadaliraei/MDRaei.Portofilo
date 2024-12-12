import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen dark:bg-black">
      <Navbar />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
