import React, { useState } from "react";

const Slot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className=" grid m-2 md:m-0 content-center font-poppins font-lg font-bold tracking-widest w-full h-12 text-center bg-white bg-gradient-to-r from-orange-600 to-blue-700 bg-clip-text animate-text text-transparent animate-pulse">
        <button onClick={handleButtonClick} className="z-50 text-black">
          Check the average wait time at your polling station and schedule your
          time slot!
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-lg mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white shadow-lg rounded-xl">
              <div className="flex items-start justify-between p-5 border-b border-gray-200">
                <h3 className="text-2xl font-bold ">Book Your Slot</h3>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="heroicon-ui"
                      d="M6.293 6.707a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 011.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <p className="my-2 text-gray-600">
                  The average wait time at your voting booth is 18 minutes
                  (approx).
                </p>
              </div>
              <div class="flex justify-center my-2 ">
                <a
                  href="/timeslot"
                  class=" bg-blue-500 hover:bg-blue-700 text-white w-42 font-bold py-2 px-4 rounded-full"
                >
                  Click to book your slot
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slot;
