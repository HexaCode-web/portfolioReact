import React from "react";
import "./Testimonials.css";
import Image from "next/image";

const Testimonial = ({ Testimonial, number }) => {
  return (
    <div
      className="Testimonial"
      data-aos="flip-right"
      data-aos-duration={number * 500}
    >
      {/* <h3 className="ProfilePic">{Testimonial.name}</h3> */}
      {Testimonial.name && <h3 className="name">{Testimonial.name}</h3>}{" "}
      {Testimonial.position && (
        <h4 className="position">{Testimonial.position}</h4>
      )}
      {Testimonial.description && (
        <p className="description">{Testimonial.description}</p>
      )}
      {Testimonial.Project && <p className="Project">{Testimonial.Project}</p>}{" "}
      <div className="rating-wrapper">
        <Image
          src={(Testimonial.rating = 1 ? "/starFull.png" : "/starEmpty.png")}
          alt={(Testimonial.rating = 1 ? "starFull.png" : "starEmpty.png")}
          width="12"
          height="12"
        />
        <Image
          src={(Testimonial.rating = 2 ? "/starFull.png" : "/starEmpty.png")}
          alt={(Testimonial.rating = 2 ? "starFull.png" : "starEmpty.png")}
          width="12"
          height="12"
        />
        <Image
          src={(Testimonial.rating = 3 ? "/starFull.png" : "/starEmpty.png")}
          alt={(Testimonial.rating = 3 ? "starFull.png" : "starEmpty.png")}
          width="12"
          height="12"
        />
        <Image
          src={(Testimonial.rating = 4 ? "/starFull.png" : "/starEmpty.png")}
          alt={(Testimonial.rating = 4 ? "starFull.png" : "starEmpty.png")}
          width="12"
          height="12"
        />
        <Image
          src={(Testimonial.rating = 5 ? "/starFull.png" : "/starEmpty.png")}
          alt={(Testimonial.rating = 5 ? "starFull.png" : "starEmpty.png")}
          width="12"
          height="12"
        />
      </div>
    </div>
  );
};

export default Testimonial;
