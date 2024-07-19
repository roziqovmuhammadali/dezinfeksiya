import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick, itemStyles }) => {
  return (
    <div style={{ borderBottom: "1px solid gray" }}>
      <button
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 1rem",
          outline: "none",
          backgroundColor: itemStyles.backgroundColor,
          color: isOpen ? "black" : itemStyles.color,
          borderRadius: itemStyles.borderRadius,
          cursor: "pointer",
          fontWeight: itemStyles.fontWeight,
          fontSize: "28px"
        }}
        onClick={onClick}>
        <span style={{ fontWeight: "600" }}>{title}</span>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "#1D68F9" : "#F2F2F2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: isOpen ? "white" : "black"
          }}>
          <svg
            style={{
              width: "1.25rem",
              height: "1.25rem",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s"
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div style={{ padding: "1rem", fontSize: "15px", color: "#676D83" }}>
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Зараркунандаларни йўқ қилиш қандай амалга оширилади?",
      content:
        "Махсус асбоб-ускуналар ёрдамида инсектитсидлар аерозолли туманга айланади ва девор қоғози, деворлар ва тахта плиталари орасидаги енг кичик бўшлиқларга, кўзга кўринмас ҳашаротлар учун потентсиал 'яшириш жойлари' га киради."
    },
    {
      title: "Сиз фойдаланадиган дорилар хавфлими?",
      content:
        "Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли емас. Аммо даволанишдан кейин хонани 40 дақиқа давомида вентилятсия қилиш керак."
    },
    {
      title: "Менга уйимни даволанишга тайёрлашнинг қандайдир усули керакми?",
      content:
        "Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат йўқ."
    }
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const itemStyles = {
    backgroundColor: "white", // Change this to your desired background color
    color: "#676D83", // Change this to your desired text color
    borderRadius: "0px", // Change this to your desired border radius
    fontWeight: "700"
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          itemStyles={itemStyles}
        />
      ))}
    </div>
  );
};

export default Accordion;
