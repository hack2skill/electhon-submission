import React from "react";
import Carousel from "../components/election/carousel";
import Features from "../components/election/features";
import Navbar from "../components/Navbar";

export default function Election() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Features />
    </>
  );
}
