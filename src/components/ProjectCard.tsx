import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../assets/icons/github.svg";

interface Props {
  title: string;
  date: string;
  description: string;
  platform: string;
  websiteURI: string;
  githubURI: string;
  image: string;
}

const ProjectCard = (item: Props) => {
  const GithubBtn = () => {
    return (
      <a
        href={item.githubURI}
        target="_blank"
        className="bg-black py-1 px-3 rounded-md flex items-center gap-3 cursor-pointer z-10 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
      >
        <Github className="h-[1.5rem] w-[1.5rem]" />
        <p className="text-white font-Poppins text-sm font-semibold ">Github</p>
      </a>
    );
  };
  return (
    <div className="w-full z-10 flex">
      {/* Left side */}
      <div className="hidden lg:block w-[30%] relative">
        <div className="absolute right-0 top-[3rem]">
          {/* Rectangle bar on the left */}
          <div className="w-[300px] h-[1.5rem] bg-white" />
          <p className="text-[1.7rem] font-semibold text-gray-100 mt-10">
            {item.date}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 h-[25rem] relative flex">
        {/* absolute element for floating borders */}
        <div className="w-[95%] h-full absolute right-0 border-t-[1px]" />

        <div className="w-[60%] flex-1 mt-[3rem] flex flex-col">
          <p className="text-2xl font-semibold ml-4 mb-2 text-gray-600 lg:hidden">
            {item.date}
          </p>
          <div className="flex justify-between">
            {/* Bar */}
            <div className="w-[300px] h-[1.5rem] bg-gray-600" />
            <div className="flex items-center gap-5 mx-5">
              {item.websiteURI && (
                <a
                  target="_blank"
                  href={item.websiteURI}
                  className="z-10 p-2 hover:bg-gray-100 rounded-full"
                >
                  <IoOpenOutline className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
                </a>
              )}
              {item.githubURI && <GithubBtn />}
            </div>
          </div>
          <p className="text-3xl font-semibold ml-4">{item.title}</p>

          {/* description part, the container below title*/}
          <div className="flex-1 flex justify-between flex-col mt-7 pl-10 px-5">
            <div className="font-Poppins font-sm">{item.description}</div>
            <p className="mt-auto text-sm text-gray-700">{item.platform}</p>
          </div>
        </div>

        {/* Image part in the right side */}
        <div className="w-[40%] h-full place-items-center hidden md:grid">
          <img
            src={item.image}
            className=" h-[20rem] object-cover rounded-lg mt-[3rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
