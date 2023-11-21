"use client";
import React, { useEffect } from "react";
import "./whyUs.css";
import { Zilla_Slab } from "next/font/google";
import WhyUsCard from "../whyUsCard/WhyUsCard";
import Numbers from "./Numbers";
import tempData from "../../tempData.json";
const Zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "300", "600", "300"],
});

const WhyUs = () => {
  const data = tempData.whyUs;
  const dataNumbers = {
    Annual: 30,
    Customers: 3,
    Projects: 10,
  };
  return (
    <section id="WhyUs" className={Zilla.className}>
      <h2 className="headline" data-aos="fade-right">
        WHY CHOOSE US
      </h2>
      <div className="cards">
        {data.map((card, index) => {
          return (
            <WhyUsCard
              key={card.name}
              name={card.name}
              description={card.description}
              image={card.image}
              hoverIMG={card.hoverImg}
              number={index + 1}
            />
          );
        })}
      </div>
      <Numbers data={dataNumbers} />
    </section>
  );
};

export default WhyUs;
