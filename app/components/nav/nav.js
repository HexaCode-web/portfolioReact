"use client";
import Image from "next/image";
import "./nav.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hoverPosition, setHoverPosition] = useState(0);
  const [Color, setColor] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    const linkElements = document.querySelectorAll(".link");
    linkElements.forEach((link, index) => {
      // Add 'link' parameter here
      link.addEventListener("mouseover", () => {
        setHoverPosition(index + 1);
      });
    });
  }, []); // Ensure the dependency array is empty
  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const ChangeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        ChangeColor();
      });
    }
  }, []);
  return (
    <div>
      <div className={`blackout ${showSidebar ? "" : "hidden"}`}></div>
      <div className={`sidebar ${showSidebar ? "" : "hidden"}`}>
        <top className="top">
          <div className="logo">
            <Image src="/logo.png" alt="logo" width="70" height="70" />
          </div>
          <button className="exit" onClick={handleShowSidebar}>
            <Image src="/exit.png" alt="exit" width="25" height="25" />
          </button>
        </top>
        <bottom className="bottom">
          <div className="link" data-id="link">
            <a>Home</a>
            <div className={`box ${hoverPosition === 1 ? "" : "hidden"}`}></div>
          </div>
          <div className="link" onClick={handleShowSidebar} data-id="link">
            <a href="#about">About</a>
            <div className={`box ${hoverPosition === 2 ? "" : "hidden"}`}></div>
          </div>
          <div className="link" onClick={handleShowSidebar} data-id="link">
            <a href="#WhyUs">Why Us?</a>
            <div className={`box ${hoverPosition === 3 ? "" : "hidden"}`}></div>
          </div>
          <div className="link" onClick={handleShowSidebar} data-id="link">
            <a href="#Projects">Projects</a>
            <div className={`box ${hoverPosition === 4 ? "" : "hidden"}`}></div>
          </div>
          <div className="link" onClick={handleShowSidebar} data-id="link">
            <a href="#Services">Services</a>
            <div className={`box ${hoverPosition === 5 ? "" : "hidden"}`}></div>
          </div>
          <div className="link" onClick={handleShowSidebar} data-id="link">
            <a href="#Skills">Skills</a>
            <div className={`box ${hoverPosition === 6 ? "" : "hidden"}`}></div>
          </div>
          <div className="link" onClick={handleShowSidebar} data-id="link">
            <a href="#Testimonials">Testimonials</a>
            <div className={`box ${hoverPosition === 7 ? "" : "hidden"}`}></div>
          </div>
          <div className="link" onClick={handleShowSidebar} data-id="link">
            <a href="#contact">Contact</a>
            <div className={`box ${hoverPosition === 8 ? "" : "hidden"}`}></div>
          </div>
        </bottom>
      </div>

      <div className={`navbar ${Color ? "fixed" : ""}`}>
        <div className="logo">
          <Image src="/logo.png" alt="logo" width="70" height="70" />
        </div>
        <button className="burger" onClick={handleShowSidebar}>
          <Image src="/menu.png" alt="menu" width="30" height="30" />
        </button>
      </div>
    </div>
  );
}
