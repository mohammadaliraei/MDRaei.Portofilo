import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "../components/Container";
import { Images } from "../components/Images";
import About from "../components/About";
import Call from "../components/Call";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Call />
    </div>
  );
};

export default Home;
