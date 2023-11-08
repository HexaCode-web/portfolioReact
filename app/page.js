"use client";
import { useEffect } from "react";
import About from "./components/About/About";
import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import WhyUs from "./components/whyUs/whyUs";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main>
      <Navbar />
      <Header />
      <div className="section-wrapper">
        <About />
        <WhyUs />
      </div>
    </main>
  );
}
