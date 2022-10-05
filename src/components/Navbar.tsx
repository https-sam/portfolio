import { useRef, useState } from "react";
import { IoSunny, IoMoon, IoMenu } from "react-icons/io5";
import { useOutsideClickDetector } from "../utils/customHooks";
import "./styles.css";

const Navbar = ({ toggleTheme, theme }: any) => {
  const navItems = [
    {
      name: "About",
      link: "",
    },
    {
      name: "Projects",
      link: "",
    },
    {
      name: "Skills",
      link: "",
    },
    {
      name: "Contact",
      link: "",
    },
  ];

  const [isOpen, setDropdownOpen] = useState(false);
  const openDropdown = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClickDetector(
    openDropdown,
    () => setDropdownOpen(false),
    dropdownRef
  );

  return (
    <div className="w-screen flex h-[3.5rem] justify-end md:justify-center p-3 items-center fixed bg-white/30 dark:bg-gray-800/30 backdrop-blur-[8px] z-[100]">
      {/* Nornal list for > md screen */}
      <ul
        className="w-full lg:w-[30%] max-w-[400px] flex justify-between select-none"
        id="navbar-list"
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className="font-Poppins cursor-pointer text-black dark:text-gray-200 font-medium hover:bg-gray-300/30 rounded-md py-1 px-4 transition duration-300 ease-in-out hover:rounded-lg"
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <div
        className="hover:bg-gray-100 dark:hover:bg-gray-600 p-3 rounded-full grid place-items-center cursor-pointer z-100 md:absolute right-[1rem] md:right-[3rem]"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <IoSunny className="h-[1.3rem] w-[1.3rem] text-yellow-600" />
        ) : (
          <IoMoon className="h-[1.3rem] w-[1.3rem] text-yellow-400" />
        )}
      </div>

      {/* Hamberger menu for smaller screen */}
      <div
        className="bg-gray-200 dark:bg-gray-700 rounded-md p-3 border-[1px] border-gray-300 dark:border-gray-500 ml-4 cursor-pointer z-100 md:hidden mr-0"
        ref={openDropdown}
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <IoMenu className="w-[1.3rem] h-[1.3rem] text-gray-400 dark:text-white" />
      </div>

      <div
        className={`dark:bg-gray-700 bg-gray-100 rounded-md md:hidden absolute right-[1rem] top-[3.5rem]  cursor-pointer z-[10] border-[.01px] shadow-lg pt-[1px] dark:border-0 dark:shadow-depthBottom ${
          isOpen ? "block" : "hidden"
        }`}
        ref={dropdownRef}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`font-Poppins hover:bg-gray-200 dark:hover:bg-gray-600 text-start list-none cursor-pointer text-gray-700 dark:text-gray-200 font-medium px-4 transition duration-300 ease-in-out pr-[5rem] py-2 ${
              index === navItems.length - 1 && "rounded-b-md"
            } ${index === 0 && "rounded-t-md"}`}
          >
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
