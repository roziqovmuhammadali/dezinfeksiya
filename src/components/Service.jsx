import React, { useEffect } from "react";
import boshlangich from "../assets/boshlangich.svg";
import orta from "../assets/orta.svg";
import yuqori from "../assets/yuqori.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });

    // Scroll barni animatsiya tugashidan oldin o'chirish
    const handleAnimationStart = () => {
      document.body.style.overflow = "hidden"; // Scroll barni yashirish
    };

    const handleAnimationEnd = () => {
      document.body.style.overflow = "auto"; // Scroll barni qaytarish
    };

    document.addEventListener("aos:in", handleAnimationStart); // Animatsiya boshlanishi
    document.addEventListener("aos:out", handleAnimationEnd); // Animatsiya tugashi

    return () => {
      document.removeEventListener("aos:in", handleAnimationStart);
      document.removeEventListener("aos:out", handleAnimationEnd);
    };
  }, []);

  return (
    <div id="service">
      <div>
        <h1
          className="text-[40px] leading-14 text-[#020C31] font-bold px-6"
          data-aos="fade-up">
          Service
        </h1>
        <p
          className="w-[301px] h-[72px] text-[14px] leading-4 text-[#676D83] pl-6"
          data-aos="fade-up"
          data-aos-delay="100">
          Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-between px-6 gap-6">
        <div
          className="max-w-[563px] h-[500px] px-2 bg-[#F3F6F6] p-7 rounded-lg flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="200">
          <div className="pt-2">
            <h1 className="text-[32px] leading-10 max-w-[337px] h-[80px] text-[#020C31] font-bold">
              Boshlang’ich tushunchalar
            </h1>
            <p className="text-[#056AC7] text-[16px] font-medium leading-5">
              Nazariy bilimlar
            </p>
            <p className="text-[14px] text-[#056AC7] font-medium">16 dars</p>
          </div>
          <div className="w-full flex items-center justify-end">
            <img src={boshlangich} alt="" />
          </div>
        </div>
        <div
          className="max-w-[563px] h-[500px] px-2 bg-[#F3F6F6] p-7 rounded-lg flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="300">
          <div className="pt-2">
            <h1 className="text-[32px] leading-10 max-w-[337px] h-[80px] text-[#020C31] font-bold">
              O'rta
            </h1>
            <p className="text-[#03ADE3] text-[16px] font-medium leading-5">
              Nazariy bilimlar va Amaliy Bilimlar
            </p>
            <p className="text-[14px] text-[#00A9B3] font-medium">23 dars</p>
          </div>
          <div className="w-full flex items-center justify-end">
            <img src={orta} alt="" />
          </div>
        </div>
        <div
          className="max-w-[563px] px-2 h-[500px] bg-[#F3F6F6] p-7 rounded-lg flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="400">
          <div className="pt-2">
            <h1 className="text-[32px] leading-10 max-w-[337px] h-[80px] text-[#020C31] font-bold">
              Yuqori
            </h1>
            <p className="text-[#009AA3] text-[16px] font-medium leading-5">
              Nazariy bilimlar va Amaliy Bilimlar
            </p>
            <p className="text-[14px] text-[#00A9B3] font-medium">16 dars</p>
          </div>
          <div className="w-full flex items-center justify-end">
            <img src={yuqori} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
