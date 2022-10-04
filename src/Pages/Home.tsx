import { IoBug } from "react-icons/io5/index.js";
import "./style.css";

import img from "../assets/images/me.jpg";
const Home = () => {
  return (
    <div className="flex lg:px-10 flex-col-reverse lg:flex-row w-screen flex-wrap justify-center items-center">
      <div className="w-full lg:w-[70%] text-[10vw] lg:text-[6rem] text-center">
        <p className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] -mb-[.3em]">
          CREATIVE
        </p>
        <div className="flex items-center gap-[10px] -mb-[.3em]">
          <span className="font-wideTitle text-[10vw] lg:text-[5.5rem]">S</span>
          <IoBug className="text-green-600 h-[5rem] inline cursor-pointer hover:text-purple-600" />
          <span className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px]">
            TFWARE
          </span>
        </div>
        {/* <p className="font-wideTitle text-[6rem]">SOFTWARE</p> */}
        <p className="font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px]">
          DEVELOPER
        </p>
      </div>
      <div className="flex items-center justify-center w-[50%] lg:w-[30%]">
        <img src={img} className="w-full" />
      </div>
    </div>
  );
};

export default Home;
