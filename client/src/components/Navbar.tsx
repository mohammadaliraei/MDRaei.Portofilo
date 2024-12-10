import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Container } from "./Container";
import { Images } from "./Images";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const saveMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(saveMode);
    if (saveMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleOnClick = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <div className="border-b-[1px] h-20 ">
      <Container>
        <div className="flex flex-row h-20 items-center justify-between">
          {isDarkMode ? (
            <img
              src={Images.LogoLightMode}
              className="w-24 "
            />
          ) : (
            <img
              src={Images.LogoDarkMode}
              className="w-24"
            />
          )}
          <div>
            <button
              onClick={toggleOnClick}
              className={` p-2 rounded-md dark:hover:bg-gray-800 hover:bg-gray-200 
                hover:duration-150`}
            >
              {isDarkMode ? (
                <CiDark className="text-black dark:text-white w-6 h-6" />
              ) : (
                <CiLight className="text-black dark:text-white w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
