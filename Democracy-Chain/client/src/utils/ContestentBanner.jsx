import React from "react";

const ContestentBanner = ({heading}) => {
  return (
    <>
      <div className="w-full mt-10 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700">
        {heading? <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {heading}
          </span>{" "}
          
        </h1>:<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Vote Your Favourite Candidate
          </span>{" "}
          Democracy Chain
        </h1> }
        {/* <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-900">
          An election is a formal group decision-making process by which a
          population chooses an individual or multiple individuals to hold
          public office
        </p> */}
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
      </div>
    </>
  );
};

export default ContestentBanner;
