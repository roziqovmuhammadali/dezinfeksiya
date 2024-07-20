import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Navbar = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languages = localStorage.getItem("i18nextLng");

  // Ref for menu container
  const menuRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Klikdan keyin menyuni yopish
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md w-full h-20 fixed top-0 z-50">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center xs:justify-start sm:justify-start gap-5 h-20">
          <div>
            <a href="#home">
              <img
                src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
                alt="logo"
                className="w-[240px]"
              />
            </a>
          </div>
          <div className="flex justify-between items-center xs:hidden sm:hidden lg:block">
            <ul className="flex justify-between items-center gap-6">
              <li className="hover:text-blue-600 hover:underline">
                <a href="#service">{t("Service")}</a>
              </li>
              <li className="hover:text-blue-600 hover:underline">
                <a href="#about">{t("About")}</a>
              </li>
              <li className="hover:text-blue-600 hover:underline">
                <a href="#edit">{t("FAQ")}</a>
              </li>
              <li className="hover:text-blue-600 hover:underline">
                <a href="#contact">{t("Contact")}</a>
              </li>
            </ul>
          </div>
          <select
            name="ln"
            id="ln"
            onChange={(e) => changeLanguage(e.target.value)}
            value={languages}
            className=" rounded-lg px-2 py-1">
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>

          <button
            className="w-48 h-[36px] rounded-[36px] bg-[#3360FF] text-white font-bold hover:bg-blue-700 hover:text-white lg:block hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <a href="#contact">{t("boglanish")}</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
