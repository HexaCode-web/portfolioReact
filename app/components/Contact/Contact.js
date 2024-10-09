import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const Contact = () => {
  const recaptchaRef = useRef(); // Reference to reCAPTCHA
  const [isHuman, setIsHuman] = useState(false); // State to track reCAPTCHA
  const [state, handleSubmit] = useForm("mayknryl"); // Formspree form handling

  // Handle reCAPTCHA change
  const onReCAPTCHAChange = (token) => {
    if (token) {
      setIsHuman(true); // User passed the reCAPTCHA
    } else {
      setIsHuman(false); // User failed or didn't complete reCAPTCHA
    }
  };

  // Check reCAPTCHA before form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue(); // Get reCAPTCHA token
    if (!token || !isHuman) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    // Proceed with form submission if reCAPTCHA is validated
    handleSubmit(e);
  };

  return (
    <section id="contact">
      <h2 className="headline" data-aos-duration={500} data-aos="fade-up">
        LET'S WORK TOGETHER
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

      {/* Form with Formspree and reCAPTCHA */}
      <form onSubmit={handleFormSubmit}>
        <div
          className="item Form-Group"
          id="FName"
          data-aos-duration={1000}
          data-aos="fade-right"
        >
          <label htmlFor="Fname">Your First Name:</label>
          <input type="text" name="Fname" id="Fname" required />
        </div>
        <div
          className="item Form-Group"
          data-aos-duration={1000}
          data-aos="fade-left"
          id="LName"
        >
          <label htmlFor="Lname">Your Last Name:</label>
          <input type="text" name="Lname" id="Lname" required />
        </div>
        <div
          className="item Form-Group"
          id="Email"
          data-aos-duration={1200}
          data-aos="fade-up"
        >
          <label htmlFor="email">Your Email:</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div
          className="item Form-Group"
          id="Subject"
          data-aos-duration={1400}
          data-aos="fade-up"
        >
          <label htmlFor="subject">Your Subject:</label>
          <input type="text" name="subject" id="subject" required />
        </div>
        <div
          className="item Form-Group"
          id="Message"
          data-aos-duration={1600}
          data-aos="fade-up"
        >
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        {/* reCAPTCHA v2 widget */}
        <ReCAPTCHA
          sitekey="6Lei7lwqAAAAAKrLZDInJS3mWK18BpPheTdxAct1"
          onChange={onReCAPTCHAChange}
          ref={recaptchaRef}
          data-aos-duration={1700}
          data-aos="fade-up"
          id="captcha"
        />
        {state.succeeded && <p id="status">Thanks for your submission!</p>}
        <button type="submit" id="submit" disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
};

export default Contact;
