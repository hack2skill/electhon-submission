import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EVM = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 class="text-center font-bold py-5 text-3xl">
          Electronic Voting Machine
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
            Simulation
          </span>
        </h1>
      </div>
      <img
        class="mx-auto"
        src="/assets/1.png"
        alt="Workplace"
        useMap="#workmap"
        width={1000}
      />
      <map name="workmap">
        <area
          shape="rect"
          coords="290,172,333,250"
          alt="Phone"
          href="/output1"
        />
        <area
          shape="rect"
          coords="290,252,353,290"
          alt="Phone"
          href="/output2"
        />
        <area
          shape="rect"
          coords="290,292,393,320"
          alt="Phone"
          href="/output3"
        />
        <area
          shape="rect"
          coords="290,352,433,380"
          alt="Phone"
          href="/output4"
        />
        <area
          shape="rect"
          coords="290,392,483,430"
          alt="Phone"
          href="/output5"
        />
      </map>

      <Footer />
    </div>
  );
};

export default EVM;
