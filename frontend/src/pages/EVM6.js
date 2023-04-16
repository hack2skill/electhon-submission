import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EVM6 = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 class="text-center font-bold py-5 text-3xl">
          You have casted your vote.
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
            Congratulations !
          </span>
        </h1>
        <img class="mx-auto" src="/assets/6.png" alt="Workplace" width={1000} />
      </div>
      <div class="flex justify-center mb-5">
        <a
          class="body-font font-poppins inline-block py-2 px-6 bg-blue-50 hover:bg-blue-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          href="/simulation"
        >
          Reset
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default EVM6;
