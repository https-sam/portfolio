import { config } from "../utils/config.default";
import React, { useRef } from "react";
import {
  IoArrowBack,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);

  return (
    <div className="pt-10 md:pt-[4rem] relative p-4 sm:p-[3rem] md:p-10 flex flex-col bg-white dark:bg-gray-800">
      <div className="flex gap-1 md:gap-6 flex-wrap cursor-pointer">
        <div
          className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full w-fit p-3"
          onClick={() => navigate("/")}
        >
          <IoArrowBack className="w-[1.5rem] h-[1.5rem] text-gray-500 dark:text-white" />
        </div>
        <p className="text-gray-800 dark:text-gray-100 font-wideTitle text-[2rem]">
          Interested in Working Together?
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 font-Poppins md:ml-[6rem] mt-4">
        Love to hear from you, get in touch 👋.
      </p>

      {/* Contact Form  */}
      <div className="flex h-full mt-5 md:mt-[3rem] flex-wrap max-w-[2000px]">
        <section className="mr-10">
          <div className="flex flex-col gap-2">
            <div
              className="flex gap-6 border-[2px] border-transparent rounded-lg hover:border-blue-700 w-fit pr-[6rem] pl-5 py-4 cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:osgo1115@icloud.com")
              }
            >
              <IoMail className="w-[1.5rem] h-[1.5rem] text-blue-700" />
              <p className="font-Poppins text-gray-800 dark:text-white">
                osgo1115@icloud.com
              </p>
            </div>
            <div
              className="flex gap-6 border-[2px] border-transparent rounded-lg hover:border-blue-700 w-fit pr-[6rem] pl-5 py-4 cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:info@yourprofessor.io")
              }
            >
              <IoMail className="w-[1.5rem] h-[1.5rem] text-blue-700" />
              <p className="font-Poppins text-gray-800 dark:text-white">
                info@yourprofessor.io
              </p>
            </div>
          </div>

          <div className="ml-[.5rem] mt-2">
            <div className="flex justify-center gap-[1rem] z-[1] w-fit">
              <a
                href={config.myGithubLink}
                rel="noreferrer"
                target="_blank"
                className="p-3 hover:bg-blue-700 rounded-full group"
              >
                <IoLogoGithub className="w-[2rem] h-[2rem] group-hover:text-white text-gray-300 dark:text-white cursor-pointer" />
              </a>

              <a
                href={config.myLinkedinLink}
                target="_blank"
                rel="noreferrer"
                className="p-3 hover:bg-blue-700 rounded-full group"
              >
                <IoLogoLinkedin className="w-[2rem] h-[2rem] group-hover:text-white text-gray-300 dark:text-white cursor-pointer" />
              </a>
            </div>
          </div>
        </section>

        <div className="w-[40rem] h-fit border-t-[1px] dark:border-none shadow-md  bg-white rounded-[10px] p-5 py-8 flex flex-col mt-[3rem] justify-center ml-auto gap-4 dark:shadow-shadowDownward dark:bg-darkGray">
          <div>
            <p className="font-Poppins mb-2 dark:text-gray-300">Your Name</p>
            <label className="flex items-center gap-3 border-[1px] border-gray-300 rounded-[5px] p-3 w-full focus-within:border-blue-700 dark:shadow-shadowDownward dark:border-none dark:text-gray-200">
              <IoPersonOutline className="w-[1.5rem] h-[1.5rem]" />
              <input
                ref={nameRef}
                placeholder="Your Name"
                className="bg-transparent rounded-[3px] outline-none flex-1"
              />
            </label>
          </div>

          <div>
            <p className="font-Poppins mb-2 dark:text-gray-300">Your Name</p>
            <label className="flex items-center gap-3 border-[1px] border-gray-300 rounded-[5px] p-3 w-full focus-within:border-blue-700 dark:shadow-shadowDownward dark:border-none dark:text-gray-200">
              <IoMailOutline className="w-[1.5rem] h-[1.5rem]" />
              <input
                placeholder="Your Name"
                className="bg-transparent rounded-[3px] outline-none flex-1"
              ></input>
            </label>
          </div>

          <div>
            <p className="font-Poppins mb-2 dark:text-gray-300">Message</p>
            <label className="flex gap-3 border-[1px] border-gray-300 rounded-[5px] p-3 w-full focus-within:border-blue-700 dark:shadow-shadowDownward dark:border-none dark:text-gray-200">
              <textarea className="bg-transparent rounded-[3px] outline-none flex-1 min-h-[8rem]"></textarea>
            </label>
          </div>

          <button className="bg-blue-700 w-[10rem] px-3 py-2 ml-auto rounded-lg text-white font-semibold shadow-shadowUpward hover:bg-blue-800">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
