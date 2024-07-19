import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Service from "./components/Service";
import SectionTwo from "./components/SectionTwo";
import Faq from "./components/Faq";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-24 p-10 container">
      <Navbar />
      <Header />
      <Section />
      <Service />
      <SectionTwo />
      <Faq />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
