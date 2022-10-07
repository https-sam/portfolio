import React from "react";
import {
  IoShareSocialOutline,
  IoDesktopSharp,
  IoConstructOutline,
} from "react-icons/io5";
import nodeJsIcon from "../assets/images/node.png";
import typeSIcon from "../assets/images/typescript.png";
import mongoIcon from "../assets/images/mongo.png";
import expressIcon from "../assets/images/express.png";
import javascriptIcon from "../assets/images/javascript.png";
import reactIcon from "../assets/images/react.png";
import nextIcon from "../assets/images/next.png";
import flutterIcon from "../assets/images/flutter.png";
import reactNativeIcon from "../assets/images/rnative.png";
import dartIcon from "../assets/images/dart.png";

import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = [
    {
      title: "Backend",
      titleIcon: (
        <IoShareSocialOutline className="w-[1.5rem] h-[1.5rem] text-white" />
      ),
      description:
        "I build reliable and scalable backend servers. Security is my main focus.",
      categoty: "Languages / Frameworks",
      items: [
        {
          name: "Node.js",
          icon: <img src={nodeJsIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "Express.js",
          icon: <img src={expressIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "Mongo DB",
          icon: <img src={mongoIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "TypeScript",
          icon: <img src={typeSIcon} className="w-[40px] h-[40px]" />,
        },
      ],
    },
    {
      title: "Frontend",
      titleIcon: (
        <IoDesktopSharp className="w-[1.5rem] h-[1.5rem] text-white" />
      ),
      description: "I am passionate about UI / UX design.",
      categoty: "Languages / Frameworks",
      items: [
        {
          name: "React.js",
          icon: <img src={reactIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "Next.js",
          icon: <img src={nextIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "Flutter",
          icon: <img src={flutterIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "React Native",
          icon: <img src={reactNativeIcon} className="w-[40px]" />,
        },
        {
          name: "TypeScript",
          icon: <img src={typeSIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "Javascript",
          icon: <img src={javascriptIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "Dart",
          icon: <img src={dartIcon} className="w-[40px] h-[40px]" />,
        },
      ],
    },
    {
      title: "Technology",
      titleIcon: (
        <IoConstructOutline className="w-[1.5rem] h-[1.5rem] text-white" />
      ),
      description:
        "I build reliable and scalable backend servers. Security is my main focus.",
      categoty: "Tools",
      items: [
        {
          name: "Git",
          icon: <img src={nodeJsIcon} className="w-[40px] h-[40px]" />,
        },
        {
          name: "Node.js",
          icon: <img src={nodeJsIcon} className="w-[40px] h-[40px]" />,
        },
      ],
    },
  ];
  return (
    <div>
      <h1 className="font-wideTitle text-[8vw] mb-5 ml-5 mt-10 md:text-[3.5rem] xl:text-[4rem] tracking-[2px] md:tracking-[4px] text-gray-800 lg:text-white dark:text-gray-200 z-10 select-none">
        Skills
      </h1>
      <div className="flex gap-10 justify-center flex-wrap">
        {skills.map((e) => (
          <SkillCard
            title={e.title}
            titleIcon={e.titleIcon}
            description={e.description}
            category={e.categoty}
            items={e.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
