import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobil menyu holatini saqlash

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-30 flex flex-col md:flex-row items-center justify-between h-16 px-5 transition duration-300 ${
        isScrolled ? "bg-white bg-opacity-20 backdrop-blur-lg shadow-md" : ""
      }`}
      data-aos="fade-down">
      <div className="flex items-center justify-between w-full md:w-auto">
        <a href="home">
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
            alt="logo"
            className="w-[200px] md:w-[240px]"
          />
        </a>
        {/* Mobil menyu tugmasi */}
      </div>
      {/* Mobil menyu */}
      <ul
        className={`flex flex-col md:flex-row md:items-center md:gap-5 text-[#666666] font-medium md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <li className="hover:text-[18px] hover:font-semibold hover:text-blue-600 hover:underline">
          <a href="#service">Service</a>
        </li>
        <li className="hover:text-[18px] hover:font-semibold hover:text-blue-600 hover:underline">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-[18px] hover:font-semibold hover:text-blue-600 hover:underline">
          <a href="#edit">ФАҚ</a>
        </li>
        <li className="hover:text-[18px] hover:font-semibold hover:text-blue-600 hover:underline">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="w-48 h-[36px] rounded-[36px] bg-[#3360FF] text-white font-bold hover:bg-blue-700 hover:text-white lg:block hidden">
        Богланиш
      </button>
      <button
        className="block lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
