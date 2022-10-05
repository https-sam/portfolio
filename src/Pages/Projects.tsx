import ProjectCard from "../components/ProjectCard";
import algoImg from "../assets/images/algo.png";
import ksabImg from "../assets/images/ksab.png";
import lucanImg from "../assets/images/lucan.png";
import { IoApps } from "react-icons/io5";
import { config } from "../utils/config.default";

const Projects = () => {
  // Image size should be 750px x 900px (Or the same ratio)
  const projects = [
    {
      title: "KSAB",
      date: "May 2022 - Oct 2022",
      description:
        "A crossplatform Mobile application built for the Kuwait association at CU Boulder. Re-designed the whole UI / UX, migrated the existing features & the database, and implemented: fully functional chat system, events page, explore page, profile page, tutors page & improving the overall loading time by ~30% by caching some heavy data. Also designed and implemented a website for the app for users to be able to review tutors & a tutor sign up form.",
      platform: "Web / Mobie App",
      websiteURI: "https://kuwaitcu.netlify.app",
      githubURI: "",
      image: ksabImg,
    },
    {
      title: "Algo Visualizer",
      date: "July 2022",
      description:
        "An interactive website that visualizes sorting algorithms. Built with React.js. The website is now used in CSCI 3104 (Algorithms) to demonstrate sorting algorithms. Features 6 different sorting algorithms that can be animated & configured as you like.",
      platform: "Web App",
      websiteURI: "https://algovisualizers.netlify.app",
      githubURI: "https://github.com/https-sam/algorithm-visualizer",
      image: algoImg,
    },
    {
      title: "Interactive Showcase Website",
      date: "March 2022 - May 2022",
      description:
        "A website built for my client, designed to bring improvements to his books by allowing users to leave suggestions for any line of the books. Designed and implemented CMS (Content Management System) with Javascript from scratch, allowing the admin to change the edit of the contents of the website at any time.",
      platform: "Web App",
      websiteURI: "https://www.lucantranslation.com/book1",
      githubURI: "",
      image: lucanImg,
    },
  ];

  return (
    <div className=" dark:bg-gray-800" id="section-projects">
      <div className="w-screen flex relative flex-col bg-white dark:bg-gray-800">
        <h1 className="font-wideTitle text-[8vw] mb-5 ml-5 mt-10 md:text-[3.5rem] xl:text-[4rem] tracking-[2px] md:tracking-[4px] text-gray-800 lg:text-white dark:text-gray-200 z-10 select-none">
          Projects
        </h1>
        <div className="hidden lg:block w-[30%] h-full bg-gray-600 absolute left-0" />
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>

      <div className="grid place-items-center mt-10">
        <a
          rel="noreferrer"
          target="_blank"
          href={config.myGithubLink}
          className="bg-gray-600 dark:bg-gray-100 w-fit rounded-[7px] px-4 py-2 cursor-pointer flex items-center gap-3 text-white dark:text-gray-800 font-Poppins "
        >
          See More
          <IoApps />
        </a>
      </div>
    </div>
  );
};

export default Projects;
