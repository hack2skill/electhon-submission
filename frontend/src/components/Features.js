import React from "react";

const Features = () => {
  return (
    <div>
      {/* <h1 class="mt-2 text-center font-bold py-10 text-3xl italic">
        The ballot is stronger than the
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
          bullet !
        </span>
      </h1> */}
      <h1 class="mt-2 text-center font-bold py-10 text-3xl italic">
        Creator's
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
          Space !
        </span>
      </h1>
      <div class="flex justify-center bg-blue-800">
        <div class="grid md:grid-rows-1 md:grid-flow-col md:gap-10 sm:grid-rows-1 sm:grid-flow-row sm:gap-0">
          {/* Card 1 */}
          <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm z-50">
            <img
              src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
              alt=""
              class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
            />
            <div class="bg-white shadow-2xl rounded-b-3xl">
              <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">
                Campus Initiative Program
              </h2>
              <div class="w-5/6 m-auto">
                <p class="text-center text-gray-500 pt-5">
                  Foster civic responsibility and encourage voter participation
                  by organizing Voter ID registration drives in educational
                  institutions.
                </p>
              </div>
              <div class="text-center m-auto mt-2 w-full h-16">
                <a
                  href="/campaign"
                  class="text-gray-500 font-bold lg:text-sm hover:text-blue-900"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div class="w-80 my-12 m-auto lg:mt-16 max-w-sm z-50">
            <img
              src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
              alt=""
              class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
            />
            <div class="bg-white shadow-2xl rounded-b-3xl">
              <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">
                Poster Making Challenge
              </h2>
              <div class="w-5/6 m-auto">
                <p class="text-center text-gray-500 pt-5">
                  Join the movement to increase voter turnout by showcasing your
                  creative talent in the poster making challenge.
                </p>
              </div>
              <div class="text-center m-auto mt-2 w-full h-16">
                <a
                  href="/poster"
                  class="text-gray-500 font-bold lg:text-sm hover:text-blue-900"
                  target="_blank"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div class="w-80 my-12 m-auto lg:mt-16 max-w-sm z-50">
            <img
              src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
              alt=""
              class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
            />
            <div class="bg-white shadow-2xl rounded-b-3xl">
              <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">
                Referral Code
              </h2>
              <div class="w-5/6 m-auto">
                <p class="text-center text-gray-500 pt-5">
                  Share the power of democracy by inviting friends to download
                  the election application using your referral link.
                </p>
              </div>
              <div class="text-center m-auto mt-2 w-full h-16">
                <a
                  href="/referral"
                  class="text-gray-500 font-bold lg:text-sm hover:text-blue-900"
                  target="_blank"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pattern"></div>
    </div>
  );
};

export default Features;
