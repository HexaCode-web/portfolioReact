import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <h2 className="headline" data-aos-duration={500} data-aos="fade-up">
        LETS WORK TOGETHER
      </h2>
      <p data-aos-duration={600} data-aos="fade-left">
        Ready to take the first step toward a remarkable online presence?
        Contact us today for a free consultation. Let's discuss your project,
        goals, and how we can help you achieve digital excellence.
      </p>
      <p data-aos-duration={600} data-aos="fade-right">
        At HexaCode, we're not just building websites; we're building success
        stories.
      </p>
      <form
        action="https://formspree.io/f/mayknryl"
        method="POST"
        name="emailForm"
        id="my-form"
      >
        <div
          className="item Form-Group"
          id="FName"
          data-aos-duration={1000}
          data-aos="fade-right"
        >
          <label for="Fname">Your First Name:</label>
          <input type="text" name="Fname" id="Fname" required />
        </div>
        <div
          className="item Form-Group"
          data-aos-duration={1000}
          data-aos="fade-left"
          id="LName"
        >
          <label for="Lname">Your Last Name:</label>
          <input type="text" name="Lname" id="Lname" required />
        </div>
        <div
          className="item Form-Group"
          id="Email"
          data-aos-duration={1200}
          data-aos="fade-up"
        >
          <label for="email">Your Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div
          className="item Form-Group"
          id="Subject"
          data-aos-duration={1400}
          data-aos="fade-up"
        >
          <label for="subject">Your Subject:</label>
          <input type="text" name="subject" id="subject" required />
        </div>
        <div
          className="item Form-Group"
          id="Message"
          data-aos-duration={1600}
          data-aos="fade-up"
        >
          <label for="message">Your Message:</label>
          <textarea name="Massage"></textarea>
        </div>
        <span className="status"></span>
        <input type="submit" id="submit" />
      </form>
      <div id="status"></div>
    </section>
  );
};

export default Contact;
