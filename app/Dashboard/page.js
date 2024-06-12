"use client";

import Navbar from "../components/nav/nav";
import Login from "./components/login/login";
import "./dashboard.css";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="Dashboard-wrapper">
        <Login />
      </div>
    </main>
  );
}
