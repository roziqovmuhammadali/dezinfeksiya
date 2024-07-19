import React, { useEffect } from "react";
import iconR from "../assets/iconR.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });
  }, []);

  return (
    <div className="flex items-center flex-wrap">
      <div className="w-1/2 h-[580px] flex-col justify-between flex">
        <div className="" data-aos="fade-right">
          <div className="">
            <h1 className="max-w-[588px] sm:text-[28px] md:text-[40px] lg:text-[64px] font-bold lg:leading-[72px] md:leading-[50px] sm:leading-[32px] text-[#3375FF] text-[34px]">
              Dizenfeksiya xizmati
            </h1>
            <div className="flex items-center gap-16 text-[16px] leading-[24px] mb-30">
              <p className="max-w-[301px] text-[#676D83]">
                Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
                kompaniyamiz Mijozlarimiz bizdan mamnun
              </p>
              <div className="">
                <img
                  src="https://www.dezinfeksiyatashkent.uz/assets/diz-main-ee209cbc.png"
                  alt="logo"
                  className=""
                  data-aos="zoom-in"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4" data-aos="fade-up">
          <button className="font-bold w-[190px] h-[36px] rounded-[36px] bg-[#3360ff] text-[white] hover:bg-[#cbd5e1] hover:text-[black]">
            Bog'lanish
          </button>
          <div className="w-[70px] h-[36px] flex items-center justify-center rounded-[62px] border-2">
            <a href="#" className="bg-white">
              <img src={iconR} alt="" className="w-[20px] h-[24px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[580px]" data-aos="fade-left">
        <img
          src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
          alt="logo"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Header;
