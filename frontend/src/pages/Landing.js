import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Features from "../components/Features";

const Landing = () => {
  return (
    <div>
      <Navbar slot={true} />
      <Hero />
      <Cards />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;
