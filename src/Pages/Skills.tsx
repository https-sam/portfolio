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
import firebaseIcon from "../assets/images/firebase.png";
import gitIcon from "../assets/images/git.png";
import awsIcon from "../assets/images/aws.png";
import linuxIcon from "../assets/images/linux.png";
import dockerIcon from "../assets/images/docker.png";
import figmaIcon from "../assets/images/figma.png";

// import sqlIcon from "../assets/images/sql.jpeg";

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
          icon: nodeJsIcon,
        },
        {
          name: "Express.js",
          icon: expressIcon,
        },
        {
          name: "Mongo DB",
          icon: mongoIcon,
        },
        {
          name: "SQL",
          icon: expressIcon,
        },
        {
          name: "Firebase",
          icon: firebaseIcon,
        },
        {
          name: "Javascript",
          icon: javascriptIcon,
        },
        {
          name: "TypeScript",
          icon: typeSIcon,
        },
      ],
    },
    {
      title: "Frontend",
      titleIcon: (
        <IoDesktopSharp className="w-[1.5rem] h-[1.5rem] text-white" />
      ),
      description:
        "I am passionate about UI / UX design. I create accesible, intuitive, and beatiful user interfaces.",
      categoty: "Languages / Frameworks",
      items: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextIcon,
        },
        {
          name: "Flutter",
          icon: flutterIcon,
        },
        {
          name: "React Native",
          icon: reactNativeIcon,
        },
        {
          name: "TypeScript",
          icon: typeSIcon,
        },
        {
          name: "Javascript",
          icon: javascriptIcon,
        },
        {
          name: "Dart",
          icon: dartIcon,
        },
      ],
    },
    {
      title: "Technology",
      titleIcon: (
        <IoConstructOutline className="w-[1.5rem] h-[1.5rem] text-white" />
      ),
      description: "Technology / environment I am very confortable with.",
      categoty: "Tools / Environment",
      items: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "AWS",
          icon: awsIcon,
        },
        {
          name: "Unix",
          icon: linuxIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "Figma",
          icon: figmaIcon,
        },
      ],
    },
  ];

  return (
    <div>
      <h1
        className="font-wideTitle text-[8vw] mb-5 ml-5 mt-10 md:text-[3.5rem] xl:text-[4rem] tracking-[2px] md:tracking-[4px] text-gray-800 lg:text-white dark:text-gray-200 z-10 select-none"
        id="section-skills"
      >
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
