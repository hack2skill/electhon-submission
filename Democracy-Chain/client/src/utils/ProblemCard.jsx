import React from "react";

const ProblemCard = () => {
  return (
    <>
    <div class="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0 mt-5">
      <a
        href="#"
        className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border border-black"
      >
        <img
          src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=384&q=80"
          className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"
        />
        <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-1"></div>
        <div className="absolute left-0 right-0 bottom-0 p-6 z-1 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
          <div className="h-1/2 relative">
            <div className="absolute bottom-0">
              <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                Facebook and Instagram encryption plans delayed by Meta until
                2023
              </h2>
            </div>
          </div>
          <div className="h-1/2">
            <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
              Plans to roll out end-to-end encryption on Facebook and Instagram
              have been delayed amid a row over child safety.
            </p>
            <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
              Read More
            </button>
          </div>
        </div>
      </a>
      </div>
    </>
  );
};

export default ProblemCard;
