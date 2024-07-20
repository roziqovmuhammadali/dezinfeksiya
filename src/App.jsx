import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Service from "./components/Service";
import SectionTwo from "./components/SectionTwo";
import Faq from "./components/Faq";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const [count, setCount] = useState(0);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // const [t, i18n] = useTranslation();
  // const handleChange = (event) => {
  //   const selectedLanguage = event.target.value;
  //   i18n.changeLanguage(selectedLanguage);
  // };

  return (
    <>
      <Navbar changeLanguage={changeLanguage} />
      <Header />
      <Section />
      <Service />
      <SectionTwo />
      <Faq />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
