import React from "react";
import address from "../assets/Frame 1948753427.png";
import calls from "../assets/Frame 1948753435.png";

const FooterEnd = () => {
  return (
    <div className="w-full flex items-start justify-start py-14">
      <div className=" xs:flex-col md:flex-row flex space-y-3 justify-center space-x-16 p-10">
        <div className="w-[278px]">
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-8">
          <a href="#home">
            <img src={address} alt="" />
          </a>
          <a href="">
            <img src={calls} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterEnd;
