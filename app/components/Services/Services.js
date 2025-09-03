import React from "react";
import "./Services.css";
import WhyUsCard from "../whyUsCard/WhyUsCard";
import tempData from "../../tempData.json";

const Services = () => {
  const cardsData = tempData.services;
  const renderCards = cardsData.map((card, index) => {
    return (
      <WhyUsCard
        key={card.title}
        name={card.title}
        description={card.description}
        image={card.image}
        hoverIMG={card.hoverImg}
        number={index + 1}
      />
    );
  });
  return (
    <section id="Services">
      <h2
        className="Section-headline"
        data-aos-duration={500}
        data-aos="fade-up"
      >
        WHAT DO WE DO?
      </h2>
      <div className="cards">{renderCards}</div>
    </section>
  );
};

export default Services;
