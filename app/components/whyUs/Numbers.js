"use client";
import useElementVisibility from "@/app/hooks/useElementVisibility";
import React, { useRef } from "react";
import CountUp from "react-countup";
const Numbers = ({ data }) => {
  const ref = useRef(null);
  const isVisible = useElementVisibility(ref);
  return (
    <div className="numbers" ref={ref}>
      <div className="item one">
        <div className="num">
          {isVisible ? (
            <CountUp start={0} end={data.Customers} duration={4} />
          ) : (
            ""
          )}
        </div>
        <div className="text"> Customers Pleased.</div>
      </div>
      <div className="item two">
        {isVisible ? <CountUp start={0} end={data.Annual} duration={4} /> : ""}
        <div className="text">Projects Done.</div>
      </div>
      <div className="item three">
        {isVisible ? (
          <CountUp start={0} end={data.Projects} duration={4} />
        ) : (
          ""
        )}
        <div className="text">Annual Projects.</div>
      </div>
    </div>
  );
};

export default Numbers;
