"use client";
import React, { useEffect } from "react";
import "./whyUs.css";
import { Zilla_Slab } from "next/font/google";
import WhyUsCard from "../whyUsCard/WhyUsCard";
import Numbers from "./numbers";

const Zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "300", "600", "300"],
});

const WhyUs = () => {
  const data = [
    {
      name: "PROFESSIONAL AND DELICATE",
      description:
        "in this industry details are everything. we never miss a detail.",
      image: "/delicate.png",
      hoverImg: "/delicateHover.png",
    },
    {
      name: "UNIQUE DESIGNS",
      description: "Bring the beautifully for your websites. Just enjoy!.",
      image: "/design.png",
      hoverImg: "/designHover.png",
    },
    {
      name: "AFFORDABLE AND FLEXIBLE",
      description:
        "Although our work is perfect, our prices are not the highest",
      image: "/save.png",
      hoverImg: "/SaveHover.png",
    },
    {
      name: "24/7 SUPPORT",
      description:
        "Consulting solutions and make a plan for renovation anytime of the day",
      image: "/Customer.png",
      hoverImg: "/CustomerHover.png",
    },
    {
      name: "SEO Mastery",
      description:
        "We implement industry-best practices to boost your online visibility and drive organic traffic.",
      image: "/search-engine-optimisation.png",
      hoverImg: "/search-engine-optimisation-hover.png",
    },
  ];
  const dataNumbers = {
    Annual: 30,
    Customers: 3,
    Projects: 10,
  };
  return (
    <section id="WhyUs" className={Zilla.className}>
      <h2 class="headline" data-aos="fade-left">
        WHY CHOOSE US
      </h2>
      <div class="cards">
        {data.map((card) => {
          return (
            <WhyUsCard
              key={card.name}
              name={card.name}
              description={card.description}
              image={card.image}
              hoverIMG={card.hoverImg}
            />
          );
        })}
      </div>
      <Numbers data={dataNumbers} />
    </section>
  );
};

export default WhyUs;
