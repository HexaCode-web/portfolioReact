"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./whyUsCard.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "300", "600", "300"],
});
const WhyUsCard = ({ name, description, image, hoverIMG, number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card ${poppins.className}`}
      data-aos="flip-right"
      data-aos-duration={number * 500}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className={`cardBG ${hovered ? "" : "hidden"}`}></div>

      <h4>{name}</h4>
      <p>{description}</p>
      <Image
        src={hovered ? hoverIMG : image}
        alt={name}
        width="64"
        height="64"
      />
    </div>
  );
};

export default WhyUsCard;
