import { IoBug } from "react-icons/io5/index.js";
import "./style.css";
import img from "../assets/images/me.png";
import algoImg from "../assets/images/algo.png";
import ksabImg from "../assets/images/ksab.png";
import lucanImg from "../assets/images/lucan.png";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // Image size should be 750px x 900px
  const projects = [
    {
      title: "Mobile App",
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
    <div className="w-screen flex relative flex-col bg-white dark:bg-gray-800">
      <h1 className="font-wideTitle text-[8vw] mb-5 ml-5 md:text-[3.5rem] xl:text-[4rem] tracking-[2px] md:tracking-[4px] text-gray-800 lg:text-white dark:text-gray-200 z-10 select-none">
        Projects
      </h1>
      <div className="hidden lg:block w-[30%] h-full bg-gray-600 absolute left-0" />
      {projects.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
  );
};

const Home = ({ toggleTheme }: any) => {
  return (
    <>
      <div className="flex lg:px-10 flex-col-reverse lg:flex-row w-screen flex-wrap justify-center items-center bg-white dark:bg-gray-800 pt-[5rem] lg:pt-13">
        <div className="w-full lg:w-[70%] text-[10vw] lg:text-[6rem] text-center select-none mb-[3rem] px-1">
          <p className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] -mb-[.3em] text-black dark:text-gray-200">
            A CREATIVE
          </p>
          <div className="flex items-center gap-[10px] -mb-[.3em]">
            <span className="font-wideTitle text-[10vw] lg:text-[5.5rem] text-black dark:text-gray-200">
              S
            </span>
            <IoBug
              className="text-green-600 h-[5rem] inline cursor-pointer hover:text-purple-600"
              onClick={toggleTheme}
            />
            <span className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] text-black dark:text-gray-200">
              TFWARE
            </span>
          </div>
          {/* <p className="font-wideTitle text-[6rem]">SOFTWARE</p> */}
          <p className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] text-black dark:text-gray-200">
            DEVELOPER
          </p>
        </div>
        <div className="flex items-center justify-center w-[50%] lg:w-[30%] select-none">
          <img src={img} className="w-full" alt="my avatar" />
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Home;
