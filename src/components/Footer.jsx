import React, { useState } from "react";
import bg2 from "../assets/footerBg.svg";
import footerPerson from "../assets/footerPerson.svg";

const Footer = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "448px",
        width: "100%"
      }}
      className="flex items-center justify-between rounded-xl">
      <div className="flex w-full h-full sm:flex-col lg:flex-wrap">
        <div className="w-[40%] flex justify-center items-center">
          <div className="max-w-md mx-auto p-4 space-y-4 bg-white shadow-md rounded-xl">
            <h1 className="font-bold sm:text-[18px] lg:text-[32px] max-w-[80px] leading-10">
              Малумотингизни қолдиринг
            </h1>
            {/* Foydalanuvchi ismi input */}
            <input
              type="text"
              placeholder="Ism"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Telefon raqam input */}
            <input
              type="tel"
              placeholder="+998"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className=" text-blue-600 text-[15px] font-medium">
                Maxfiylik siyosati
              </p>
            </div>
            <button className="w-full px-4 py-2 border bg-[#242825] text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-1 flex justify-center items-center font-medium">
              Юбориш
            </button>
          </div>
        </div>
        <div className=" w-[60%] flex flex-col justify-center items-center h-full">
          <div className="flex pt-3 flex-wrap">
            <h1 className="text-white text-[29px] pl-5 pt-12 leading-7 font-bold w-[382px] absolute">
              Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
              talaygina
            </h1>
            <div className="pl-64">
              <img src={footerPerson} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
