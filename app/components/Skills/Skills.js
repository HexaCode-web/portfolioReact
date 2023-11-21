import React, { useEffect, useRef } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import tempData from "../../tempData.json";

const Skills = () => {
  const skillsData = tempData.skillsData;

  useEffect(() => {
    const progressList = document.querySelectorAll(".op");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const progressEL = entry.target;
        const numberEL = progressEL.querySelector(".progress-number");
        const circleEL = progressEL.querySelector("circle");
        const elValue = Number(numberEL.getAttribute("data-val"));

        if (entry.isIntersecting) {
          // Element is entering the viewport
          progressEL.classList.remove("op");
          const interval = 2000;
          const delay = Array.from(progressList).indexOf(progressEL) * 0.1;
          progressEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`;
          circleEL.style.strokeDashoffset = `calc(472 * calc(1 - ${
            elValue / 100
          }))`;
          let startValue = 0;
          let duration = Math.floor(interval / elValue);
          let counter = setInterval(() => {
            startValue += 1;
            numberEL.textContent = startValue + "%";
            if (startValue === elValue) {
              clearInterval(counter);
            }
          }, duration);
        } else {
          // Element is leaving the viewport, reset progress
          progressEL.classList.add("op");
          circleEL.style.strokeDashoffset = `472`;

          numberEL.textContent = "0%";
        }
      });
    };

    const options = {
      threshold: 0.5, // You can adjust this value based on when you want the animation to start
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    progressList.forEach((number) => {
      observer.observe(number);
    });

    // Cleanup the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <section id="Skills">
      <h2 className="headline">OUR SKILLS</h2>
      <div className="skill-group">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} {...skill} number={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
