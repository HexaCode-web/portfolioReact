import React from "react";
import "./Skills.css";
const SkillCard = ({ name, value, number }) => {
  return (
    <div
      className="skill op"
      data-aos="fade-up"
      data-aos-duration={number * 500}
    >
      <div className="outer">
        <div className="inner">
          <div className="progress-number" data-val={value}></div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
      <h5>{name}</h5>
    </div>
  );
};

export default SkillCard;
