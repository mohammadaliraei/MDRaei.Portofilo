import React from "react";
import { Container } from "./Container";
import { IoPlanetOutline } from "react-icons/io5";
import { FiServer } from "react-icons/fi";
import { IoServerOutline } from "react-icons/io5";
import { BsPalette } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiWrenchLight } from "react-icons/pi";

interface TData {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const About: React.FC = () => {
  const data: TData[] = [
    {
      name: "Frontend",
      icon: <IoPlanetOutline className="w-6 h-6" />,
      skills: ["Nextjs", "React", "TypeScript", "Tailwind"],
    },
    {
      name: "Backend",
      icon: <FiServer className="w-6 h-6" />,
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      name: "Database",
      icon: <IoServerOutline className="w-6 h-6" />,
      skills: ["MongoDB", "Prisma", "SQL"],
    },
    {
      name: "DevOps",
      icon: <PiWrenchLight className="w-6 h-6" />,
      skills: ["Docker", "CI/CD", "Linux", "Git"],
    },
    {
      name: "Design",
      icon: <BsPalette className="w-6 h-6" />,
      skills: ["Figma", "UI/UX", "Responsive Design"],
    },
    {
      name: "Languages",
      icon: <IoCodeSlashOutline className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Java"],
    },
  ];

  return (
    <div className="dark:bg-black bg-white">
      <Container>
        <div className="flex flex-col text-black dark:text-white py-12">
          <h1 className="text-3xl font-bold py-4">About Me.</h1>
          <div className="flex flex-col text-grayColorLight dark:text-grayColorDark gap-4">
            <p>
              I'm a full-stack developer with a passion for building beautiful,
              functional, and user-friendly applications. With expertise in
              modern web technologies, I strive to create impactful digital
              solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
        <div className=" text-black dark:text-white py-12">
          <h1 className="text-3xl font-bold py-4">Skills & Expertise.</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {data.map((n) => (
              <div className="border border-grayColorLight dark:border-grayColorDark rounded-md h-52 p-4">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row items-center gap-2">
                    {n.icon}
                    <p className="text-[20px] font-bold">{n.name}</p>
                  </div>
                  <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                    {n.skills.map((skill) => (
                      <div className="flex items-center dark:bg-grayColorLight bg-gray-200 h-10 px-2 py-1 rounded-md">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
