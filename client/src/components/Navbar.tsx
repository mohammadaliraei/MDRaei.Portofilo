import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Container } from "./Container";
import { Images } from "./Images";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close icon for mobile menu

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isToggle, setIsToggle] = useState<boolean>(false);

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

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isToggle]);

  return (
    <div
      className="border-b-[1px] border-black dark:border-white h-20 fixed w-full 
      px-4 backdrop-blur-md dark:bg-white/5 bg-black/5 z-20"
    >
      <Container>
        <div className="flex flex-row h-20 items-center justify-between">
          {/* Logo */}
          {isDarkMode ? (
            <img
              src={Images.LogoLightMode}
              className="w-24"
            />
          ) : (
            <img
              src={Images.LogoDarkMode}
              className="w-24"
            />
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row gap-16 font-bold text-black dark:text-white">
            <a
              href="#aboutRef"
              className="hover:underline"
            >
              About
            </a>
            <a
              href="#skillsRef"
              className="hover:underline"
            >
              Skills
            </a>
            <a
              href="#contactRef"
              className="hover:underline"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu and Dark Mode Toggle */}
          <div className="flex flex-row items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleOnClick}
              className={`p-2 rounded-md dark:hover:bg-gray-800 hover:bg-gray-200 
                hover:duration-150`}
            >
              {isDarkMode ? (
                <CiDark className="text-black dark:text-white w-6 h-6" />
              ) : (
                <CiLight className="text-black dark:text-white w-6 h-6" />
              )}
            </button>

            {/* Hamburger Menu */}
            <div className="text-white">
              <FaHamburger
                onClick={() => setIsToggle(!isToggle)}
                className={`flex md:hidden dark:text-white text-black w-6 h-6 cursor-pointer`}
              />
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Menu */}
        {isToggle && (
          <div
            className="fixed inset-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl z-50 
    flex flex-col items-center justify-center text-black dark:text-gray-200 top-20 h-screen"
          >
            <button
              onClick={() => setIsToggle(false)}
              className="absolute top-6 right-6 text-black dark:text-white text-2xl"
            >
              <IoClose className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 text-xl font-bold">
              <a
                href="#aboutRef"
                onClick={() => setIsToggle(false)}
                className="hover:underline"
              >
                About
              </a>
              <a
                href="#skillsRef"
                onClick={() => setIsToggle(false)}
                className="hover:underline"
              >
                Skills
              </a>
              <a
                href="#contactRef"
                onClick={() => setIsToggle(false)}
                className="hover:underline"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
