import { IoBug } from "react-icons/io5/index.js";
import "./style.css";
import img from "../assets/images/me.png";
import algoImg from "../assets/images/algo.png";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Algo Visualizer",
      date: "Aug 2020",
      description:
        "An interactive website that visualizes sorting algorithms. Built with React.js. The website is now used in CSCI 3308 (Algorithms) to demonstrate sorting algorithms.",
      platform: "Web App",
      websiteURI: "https://algovisualizers.netlify.app",
      githubURI: "https://github.com/https-sam/algorithm-visualizer",
      image: algoImg,
    },
    {
      title: "Algo Visualizer",
      date: "Aug 2020",
      description:
        "An interactive website that visualizes sorting algorithms. Built with React.js. The website is now used in CSCI 3308 (Algorithms) to demonstrate sorting algorithms.",
      platform: "Web App",
      websiteURI: "https://algovisualizers.netlify.app",
      githubURI: "https://github.com/https-sam/algorithm-visualizer",
      image: algoImg,
    },
  ];
  return (
    <div className="w-screen flex relative flex-col mt-[10rem]">
      <div className="hidden lg:block w-[30%] h-full bg-gray-600 absolute left-0 z-0" />
      {projects.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
  );
};

const Home = ({ toggleTheme }: any) => {
  return (
    <>
      <div className="flex lg:px-10 flex-col-reverse lg:flex-row w-screen flex-wrap justify-center items-center bg-white dark:bg-gray-800">
        <div className="w-full lg:w-[70%] text-[10vw] lg:text-[6rem] text-center select-none">
          <p className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] -mb-[.3em] text-black dark:text-gray-200">
            CREATIVE
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
