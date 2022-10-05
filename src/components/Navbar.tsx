import { IoSunny, IoMoon } from "react-icons/io5";

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
  return (
    <div className="w-screen flex justify-center p-8 items-center relative bg-white dark:bg-gray-800">
      <ul className="w-full lg:w-[30%] max-w-[400px] flex justify-between select-none">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="font-Poppins cursor-pointer text-black dark:text-gray-200"
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div
        className="hover:bg-gray-100 dark:hover:bg-gray-600 p-3 rounded-full grid place-items-center cursor-pointer absolute right-[3rem]"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <IoSunny className="h-[1.3rem] w-[1.3rem] text-yellow-600" />
        ) : (
          <IoMoon className="h-[1.3rem] w-[1.3rem] text-yellow-400" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
