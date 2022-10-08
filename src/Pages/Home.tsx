import { IoBug, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5/index.js";
import "./style.css";
import img from "../assets/images/me.png";
import Projects from "./Projects";
import { config } from "../utils/config.default";
import Skills from "./Skills";

const Home = ({ toggleTheme, theme }: any) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 relative ${
        theme === "dark" && "grid-background"
      }`}
    >
      <div
        className="flex lg:px-10 flex-col lg:flex-row w-screen flex-wrap justify-center items-center pt-[5rem] lg:pt-13 mb-[4rem] md:mb-[8rem]"
        id="section-about"
      >
        <div className="w-full lg:w-[70%] text-[10vw] lg:text-[6rem] text-center select-none mb-[3rem] px-1">
          <p className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] -mb-[.3em] text-black dark:text-gray-200">
            A CREATIVE
          </p>
          <div className="flex items-center gap-[10px] -mb-[.3em]">
            <span className="font-wideTitle text-[10vw] lg:text-[5.5rem] text-black dark:text-gray-200">
              S
            </span>
            <IoBug
              className="text-green-600 animate-pulse z-[1] h-[5rem] inline cursor-pointer hover:text-purple-600"
              onClick={toggleTheme}
            />
            <span className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] text-black dark:text-gray-200">
              TFWARE
            </span>
          </div>
          <p className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] text-black dark:text-gray-200">
            DEVELOPER
          </p>
        </div>
        <div className="flex items-center justify-center w-[50%] lg:w-[30%] select-none">
          <img src={img} className="w-full" alt="my avatar" />
        </div>

        <div className="flex flex-col">
          <div className="h-fit w-fit z-10 mb-[3rem] group">
            <div
              id="intro-shadow"
              className="h-[4rem] -translate-x-3 group-hover:translate-y-0 group-hover:translate-x-0 translate-y-4 w-[0rem] md:w-[51.7rem] bg-gray-300 dark:bg-gray-900 absolute rounded-[5px] transition-transform duration-[1000ms] ease-in-out"
            />

            <div
              id="intro-container"
              className="rounded-[5px] p-5 bg-gray-100 peer dark:bg-gray-700 relative hover:cursor-pointer shadow-lg group-hover:shadow-none transition-shadow duration-[1000ms]"
              // id="intro-container"
            >
              <p className="text-gray-700 dark:text-gray-200 fon t-Poppins text-lg md:text-xl font-semibold px-3">
                "Hi, my name is <span className="text-green-500">Sam Goto</span>{" "}
                and I'm a full stack software engineer & UI / UX designer"
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-center gap-[3rem] z-[1]">
            <a href={config.myGithubLink} rel="noreferrer" target="_blank">
              <IoLogoGithub className="w-[2rem] h-[2rem] text-gray-300 cursor-pointer hover:text-gray-500 dark:hover:text-gray-400" />
            </a>
            <a href={config.myLinkedinLink} target="_blank" rel="noreferrer">
              <IoLogoLinkedin className="w-[2rem] h-[2rem] text-gray-300 cursor-pointer hover:text-gray-500 dark:hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
