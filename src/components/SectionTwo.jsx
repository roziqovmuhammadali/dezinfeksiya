import React, { useEffect } from "react";
import bgFaq from "../assets/bgFaq.svg";
import dezinfeksiya from "../assets/dezinfeksiyalash.svg";
import dicons from "../assets/3dicons.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTwo = () => {
  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });

    // Scroll barni animatsiya davomida o'chirish
    const handleAnimationStart = () => {
      document.body.classList.add("animating");
    };

    const handleAnimationEnd = () => {
      document.body.classList.remove("animating");
    };

    document.addEventListener("aos:in", handleAnimationStart); // Animatsiya boshlanishi
    document.addEventListener("aos:out", handleAnimationEnd); // Animatsiya tugashi

    return () => {
      document.removeEventListener("aos:in", handleAnimationStart);
      document.removeEventListener("aos:out", handleAnimationEnd);
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgFaq})` }}
      className="h-[574px] w-full bg-cover bg-center rounded-2xl gap-10 flex flex-col md:flex-row items-center justify-between mt-10"
      data-aos="fade-up" // Bu yerda animatsiya qo‘shiladi
    >
      <div
        className="w-full md:w-[40%] flex items-center justify-center h-full"
        data-aos="fade-left" // Bu yerda animatsiya qo‘shiladi
        data-aos-delay="200" // Animatsiya kechikishi (ms)
      >
        <img
          src={dezinfeksiya}
          alt=""
          className="w-full h-auto max-w-[400px]"
        />
      </div>
      <div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-around h-full px-4 md:px-0"
        data-aos="fade-right" // Bu yerda animatsiya qo‘shiladi
        data-aos-delay="400" // Animatsiya kechikishi (ms)
      >
        <div className="space-y-4 text-center md:text-left">
          <div
            className="flex justify-center md:justify-start"
            data-aos="zoom-in" // Bu yerda animatsiya qo‘shiladi
            data-aos-delay="600" // Animatsiya kechikishi (ms)
          >
            <img src={dicons} alt="icon" className="w-1/2 md:w-auto" />
          </div>
          <h1 className="text-white max-w-full font-bold text-[28px] sm:text-[16px] sm:mb-3 lg:text-[38px] leading-[36px] lg:leading-[48px]">
            Расмий кафолат - 1 йил. Биз жизмоний ва юридик шахсларга хизмат
            курсатамиз. Хизматлар лицензияланган!!!
          </h1>
        </div>
        <button
          className="font-bold w-[190px] h-[36px] rounded-[36px] bg-[#3360ff] text-[white] hover:bg-[#cbd5e1] hover:text-[black]"
          data-aos="fade-up"
          data-aos-delay="800">
          Bog'lanish
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
