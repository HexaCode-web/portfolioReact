import React from "react";
import "./Testimonials.css";
import tempData from "../../tempData.json";
import Testimonial from "./Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
const Testimonials = () => {
  const data = tempData.testimonials;
  const renderTestimonials = data.map((testimonial, index) => {
    return (
      <SwiperSlide key={testimonial.id}>
        <Testimonial Testimonial={testimonial} number={index + 1} />
      </SwiperSlide>
    );
  }, []);
  return (
    <section className="Testimonials" id="Testimonials">
      <h2 className="headline" data-aos-duration={500} data-aos="fade-up">
        WHAT DO THEY SAY ABOUT US?
      </h2>
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          250: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="testimonialsSwiper"
      >
        {renderTestimonials}
      </Swiper>
      {/* <div className="button-wrapper">
        <button className="feedback">Leave Feedback</button>
      </div> */}
    </section>
  );
};

export default Testimonials;
