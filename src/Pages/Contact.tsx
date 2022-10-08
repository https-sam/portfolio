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
    <div className="pt-10 md:pt-[4rem] relative p-4 sm:p-[3rem] md:p-10 flex flex-col">
      <div className="flex gap-1 md:gap-6 flex-wrap cursor-pointer">
        <div
          className="hover:bg-gray-700 rounded-full w-fit p-3"
          onClick={() => navigate("/")}
        >
          <IoArrowBack className="w-[1.5rem] h-[1.5rem] text-white" />
        </div>
        <p className="text-gray-100 font-wideTitle text-[2rem]">
          Interested in Working Together?
        </p>
      </div>
      <p className="text-gray-400 font-Poppins md:ml-[6rem] mt-4">
        Love to hear from you, get in touch 👋.
      </p>

      {/* Contact Form  */}
      <div className="flex h-full mt-5 md:mt-[3rem] flex-wrap max-w-[2000px]">
        <section className="mr-10">
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 border-[3px] border-transparent rounded-lg hover:border-blue-700 w-fit pr-[6rem] pl-5 py-4 cursor-pointer">
              <IoMail className="w-[1.5rem] h-[1.5rem] text-blue-700" />
              <a
                className="font-Poppins text-white"
                href="mailto:osgo1115@icloud.com"
              >
                osgo1115@icloud.com
              </a>
            </div>
            <div className="flex gap-6 border-[2px] border-transparent rounded-lg hover:border-blue-700 w-fit pr-[6rem] pl-5 py-4 cursor-pointer">
              <IoMail className="w-[1.5rem] h-[1.5rem] text-blue-700" />
              <a
                className="font-Poppins text-white"
                href="mailto:info@yourprofessor.io"
              >
                info@yourprofessor.io
              </a>
            </div>
          </div>

          <div className="ml-[.5rem] mt-2">
            <div className="flex justify-center gap-[1rem] z-[1] w-fit">
              <div className="p-3 hover:bg-blue-700 rounded-full">
                <a href={config.myGithubLink} rel="noreferrer" target="_blank">
                  <IoLogoGithub className="w-[2rem] h-[2rem] text-white cursor-pointer" />
                </a>
              </div>
              <div className="p-3 hover:bg-blue-700 rounded-full">
                <a
                  href={config.myLinkedinLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin className="w-[2rem] h-[2rem] text-white cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="w-[40rem] h-fit  bg-gray-100 rounded-[10px] p-5 py-8 flex flex-col mt-[3rem] justify-center ml-auto gap-4">
          <div>
            <p className="font-Poppins mb-2">Your Name</p>
            <label className="flex items-center gap-3 border-[2px] border-gray-300 rounded-[5px] p-3 w-full focus-within:border-blue-700">
              <IoPersonOutline className="w-[1.5rem] h-[1.5rem]" />
              <input
                ref={nameRef}
                placeholder="Your Name"
                className="bg-transparent rounded-[3px] outline-none flex-1"
              />
            </label>
          </div>

          <div>
            <p className="font-Poppins mb-2">Your Name</p>
            <label className="flex items-center gap-3 border-[2px] border-gray-300 rounded-[5px] p-3 w-full focus-within:border-blue-700">
              <IoMailOutline className="w-[1.5rem] h-[1.5rem]" />
              <input
                placeholder="Your Name"
                className="bg-transparent rounded-[3px] outline-none flex-1"
              ></input>
            </label>
          </div>

          <div>
            <p className="font-Poppins mb-2">Message</p>
            <label className="flex gap-3 border-[2px] border-gray-300 rounded-[5px] p-3 w-full focus-within:border-blue-700">
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