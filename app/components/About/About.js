"use client";

import React from "react";
import "./About.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "300", "600", "300"],
});
const About = () => {
  return (
    <section id="about" className={poppins.className}>
      <div class="canvus" data-aos="fade-right"></div>
      <content data-aos="fade-left">
        <h2>HexaCode</h2>
        <p>
          Established in 2022, HexaCode is a dynamic web development company
          committed to excellence. Our vision is to lead the industry and become
          the foremost choice in a competitive landscape.
        </p>
        <p>
          We are fueled by a relentless pursuit of delivering superior products.
          Our expertise lies in crafting expansive and sophisticated designs, as
          well as nurturing existing projects.
        </p>
        <p>
          Our portfolio showcases a diverse range of achievements, spanning from
          sleek landing pages to fully operational e-commerce platforms and
          sophisticated business websites.
        </p>
        <p>
          Whether you come to us with a design in hand or a blank canvas, rest
          assured that we will deliver nothing but the finest results. Trust
          HexaCode for web development that stands out and drives success.
        </p>
        <Image src="/signature.png" alt="signature" width="300" height="100" />
      </content>
    </section>
  );
};

export default About;
