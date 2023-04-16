import React from "react";
import Particle from "./Particle";

const Hero = () => {
  return (
    <div>
      <div class="mb-10">
        <div class="px-28 pt-6 bg-blue-800">
          <div class="-z-1 pointer-events-none">
            <Particle />
          </div>
          <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between flex-end">
            <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p class="text-3xl tracking-loose w-full italic text-gray-100 font-bold rounded-full tracking-wider">
                Hello , voters !
              </p>
              <h1 class="my-4 text-gray-100 md:text-5xl sm:text-3xl font-bold leading-tight ">
                Utilise our platform to create one strong Nation
              </h1>
              <p class="leading-normal text-gray-100 md:text-2xl tracking-loose w-full">
                Vote today to create a better future !
              </p>
              <a
                href="/campaign"
                class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Join as Institution
              </a>
            </div>
            <div class="w-46 z-50  mt-7 mb-10">
              <img
                alt=""
                class="w-full md:w-3/4  ml-0 object-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                src="/assets/Hero.png"
              />
            </div>
          </div>
        </div>
        <div class="pattern"></div>
      </div>
    </div>
  );
};

export default Hero;
