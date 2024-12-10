import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "../components/Container";
import { Images } from "../components/Images";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center border-b-[0.5px] border-white">
      <Container>
        <img
          src={Images.Logo}
          className="w-20 "
        />
        <Navbar />
      </Container>
    </div>
  );
};

export default Home;
