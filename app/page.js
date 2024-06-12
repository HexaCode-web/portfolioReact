"use client";
import { useEffect } from "react";
import About from "./components/About/About";
import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import WhyUs from "./components/whyUs/whyUs";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const credentials = {
      username: "admin1",
      password: "dis018206655",
    };

    const loginAndLogCookies = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          credentials
        );
        if (response.status === 200) {
          // Handle successful login response
          console.log("Login successful!");
          console.log(response.data);
          const cookies = document.cookie.split("; ");
          console.log("cookiesAR:", cookies);
        } else {
          // Handle failed login response
          console.error("Login failed:", response.status);
        }
      } catch (error) {
        // Handle errors during the request
        console.error("Error:", error);
      }
    };

    loginAndLogCookies();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.post("http://localhost:3000/logout");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    logout();
  });
  return (
    <main>
      <Navbar />
      <Header />
      <div className="section-wrapper">
        <About />
        <WhyUs />
        <Projects />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
