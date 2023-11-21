"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./header.css";
import { Zilla_Slab } from "next/font/google";
const Zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "300", "600", "300"],
});

const Header = () => {
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);

  return (
    <header className={Zilla.className}>
      <div className="header-content">
        <div className="left">
          <p className="name">HexaCode</p>
          <h1>UNLEASH YOUR IMAGINATION</h1>
          <p>you think. we create.</p>
          <a className="contact" href="#contact">
            Contact Us
          </a>
          <ul className="socials">
            <li>
              <a target="_blank" href=" https://wa.me/01227657288">
                <Image
                  src="/whatsapp.png"
                  alt="whatsapp"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/HexaCode-web">
                <Image src="/github.png" alt="github" width="30" height="30" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/marco-khairy-96bb6416a/"
              >
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/marco.khairy.3/"
              >
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  width="30"
                  height="30"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="photos">
          <div
            className="bigphotos"
            onMouseEnter={() => {
              setShowFloatingIcons(true);
            }}
            onMouseLeave={() => {
              setShowFloatingIcons(false);
            }}
          >
            <Image
              src="/mobile.png"
              id="mobile"
              alt="mobile"
              width="100"
              height="192"
            />
            <Image
              src="/laptop.png"
              id="laptop"
              alt="laptop"
              width="400"
              height="217"
            />
            <Image src="/pc.png" id="pc" alt="pc" width="450" height="370" />
            <Image
              src="/tablet.png"
              id="tablet"
              alt="tablet"
              width="300"
              height="270"
            />
          </div>
          <div className="icons">
            <Image
              className={`${showFloatingIcons ? "active" : ""}`}
              src="/html.png"
              alt="html"
              id="html"
              width="50"
              height="50"
            />
            <Image
              className={`${showFloatingIcons ? "active" : ""}`}
              src="/css.png"
              alt="css"
              id="css"
              width="50"
              height="50"
            />
            <Image
              className={`${showFloatingIcons ? "active" : ""}`}
              src="/javascript.png"
              alt="javascript"
              id="javascript"
              width="50"
              height="50"
            />
            <Image
              className={`${showFloatingIcons ? "active" : ""}`}
              src="/bootstrap.png"
              alt="bootstrap"
              id="bootstrap"
              width="50"
              height="50"
            />
            <Image
              className={`${showFloatingIcons ? "active" : ""}`}
              src="/react.png"
              alt="react"
              id="react"
              width="50"
              height="50"
            />
            <Image
              className={`${showFloatingIcons ? "active" : ""}`}
              src="/typescript.png"
              alt="typescript"
              id="typescript"
              width="50"
              height="50"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
