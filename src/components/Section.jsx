import React, { useEffect } from "react";
import miya from "../assets/miya.svg";
import kelishuv from "../assets/kelishuv.svg";
import sertifikat from "../assets/sertifikat.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });
  }, []);

  return (
    <div id="about" className="space-y-10">
      <h1
        className="text-[40px] leading-10 text-[#020C31] font-bold px-6"
        data-aos="fade-up">
        Avfzalliklarimiz
      </h1>

      <div className="flex items-center flex-wrap justify-between px-6 border-t-2 pt-6">
        <div className="box space-y-5" data-aos="fade-up" data-aos-delay="100">
          <img src={miya} alt="Tezda xizmat ko’rsatish" />
          <h1 className="w-[359px] h-[32px] font-bold text-[24px] leading-8 text-[#020C31]">
            Tezda xizmat ko’rsatish
          </h1>
          <p className="w-[301px] h-[72px] text-[14px] leading-6 text-[#676D83]">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="box space-y-5" data-aos="fade-up" data-aos-delay="200">
          <img src={sertifikat} alt="Yetuk mutahasislarimiz" />
          <h1 className="w-[359px] h-[32px] font-bold text-[24px] leading-8 text-[#020C31]">
            Yetuk mutahasislarimiz
          </h1>
          <p className="w-[301px] h-[72px] text-[14px] leading-6 text-[#676D83]">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="box space-y-5" data-aos="fade-up" data-aos-delay="300">
          <img src={kelishuv} alt="Sizga maqul vaqtda" />
          <h1 className="w-[359px] h-[32px] font-bold text-[24px] leading-8 text-[#020C31]">
            Sizga maqul vaqtda
          </h1>
          <p className="w-[301px] h-[72px] text-[14px] leading-6 text-[#676D83]">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
      </div>
      <div
        className="boglanish w-full h-[600px] rounded-b-2xl flex items-center justify-center bg-[#020C31]"
        data-aos="fade-up"
        data-aos-delay="400">
        <div className="w-[30%]"></div>
        <div className="flex flex-col justify-center">
          <h1
            className="max-w-[408px] px-2 h-[144px] text-white font-bold sm:text-[20px] lg:text-[40px] lg:leading-[44px]"
            data-aos="zoom-in"
            data-aos-delay="500">
            {t("klapa")}
          </h1>
          <p
            className="max-w-[301px] px-2 h-[71px] text-[14px] leading-6 text-white pb-64"
            data-aos="zoom-in"
            data-aos-delay="600">
            {t("bizning")}
          </p>
          <button
            className="font-bold w-[190px] h-[36px] rounded-[36px] bg-[#3360ff] text-[white] hover:bg-[#cbd5e1] hover:text-[black]"
            data-aos="fade-up"
            data-aos-delay="700">
            <a href="#contact">{t("boglanish")}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
