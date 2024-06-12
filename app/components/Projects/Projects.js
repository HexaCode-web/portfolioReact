"use client";
import React, { useState, useEffect, useRef } from "react";
import "./projects.css";
import { Zilla_Slab, Poppins } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import Popup from "./popup/Popup";
const Zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "300", "600", "300"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "300", "600", "300"],
});
import tempData from "../../tempData.json";
const categories = [
  { name: "All", Key: null },
  { name: "Major Projects", Key: "Major Projects" },
  { name: "Games", Key: "Game" },
  { name: "Landing Pages", Key: "Landing Pages" },
  { name: "Business websites", Key: "Business Website" },
];
const Projects = () => {
  const projects = tempData.projects;
  const [chosenProject, setChosenProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const element = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      setMouseCoordinates({
        x: event.clientX,
        y: event.clientY,
      });
    };

    element.current?.addEventListener("click", handleClick);

    return () => {
      element.current?.removeEventListener("click", handleClick);
    };
  }, [element]);

  useEffect(() => {
    if (activeCategory === null) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.type === activeCategory)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);
  const renderProjects = filteredProjects.map((project, index) => {
    return (
      <SwiperSlide
        key={project.name}
        onClick={() => {
          setChosenProject(project);
        }}
      >
        <div data-aos="fade-up" data-aos-duration={(index + 1) * 500}>
          <div className="Projects-image">
            <Image
              src={project.image}
              alt={project.name}
              width="250"
              height="250"
            />
          </div>
        </div>
      </SwiperSlide>
    );
  });
  const renderCategories = categories.map((category, index) => {
    return (
      <li key={index} data-aos="fade-up" data-aos-duration={(index + 1) * 500}>
        <h3
          className={activeCategory === category.Key ? "selected" : ""}
          onClick={() => {
            setActiveCategory(category.Key);
          }}
        >
          {category.name}
        </h3>
      </li>
    );
  });
  return (
    <section id="Projects" className={Zilla.className} ref={element}>
      <h2 data-aos-duration={500} data-aos="fade-up">
        Our Portfolio Speaks Volumes
      </h2>
      <p
        className={`subText ${poppins.className}`}
        data-aos-duration={600}
        data-aos="fade-right"
      >
        Don't just take our word for it; explore our extensive portfolio of
        successful projects. See how we've transformed businesses across various
        industries:
      </p>
      <ul className="categories">{renderCategories}</ul>
      <Swiper
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          250: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="swiper"
      >
        {renderProjects}
      </Swiper>
      <Popup
        name={chosenProject?.name}
        details={chosenProject?.details}
        image={chosenProject?.image}
        link={chosenProject?.link}
        show={chosenProject ? true : false}
        setShow={setChosenProject}
        type={chosenProject?.type}
        mouseCoordinates={mouseCoordinates}
        github={chosenProject?.github}
      />
    </section>
  );
};

export default Projects;
