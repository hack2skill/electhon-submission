import React from "react";
import ProblemCard from "../utils/ProblemCard";
import ContestentBanner from "../utils/ContestentBanner";
const ProblemsList = () => {
  return (
    <>  
       <div className="container mt-10 my-2 mx-auto px-4 md:px-12 py-8">
        <ContestentBanner heading ={"See Problem Raised By Election Commissions Members"}/>
      </div>
        <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
      <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
        <div className="flex flex-col flex-wrap md:flex-row md:-mx-2 w-full">
          <ProblemCard />
          <ProblemCard />
          <ProblemCard />
          <ProblemCard />
          <ProblemCard />
        </div>
      </div>
    </div>
    </>
  );
};

export default ProblemsList;
