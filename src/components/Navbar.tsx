import React from "react";

const Navbar = () => {
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
    <div className="w-screen flex justify-center p-8">
      <ul className="w-full lg:w-[30%] max-w-[400px] flex justify-between">
        {navItems.map((item, index) => (
          <li key={index} className="font-code">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
