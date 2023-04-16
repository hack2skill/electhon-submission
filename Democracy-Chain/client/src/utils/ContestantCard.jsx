import React, { useContext } from "react";
import { DataContext } from "../context/Context";

const ContestantCard = ({item,eid}) => {
  const {casteVote,address} = useContext(DataContext);
  return (
    <>
      <div className="w-full max-w-sm m-1 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <div className="flex flex-col items-center p-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={item.image}
            alt="Bonnie image"
          />

          <h5 className="text-xl font-medium text-gray-900 dark:text-black">
            {item.fullname}
          </h5>
          <span className="text-sm font-bold text-blue-500 dark:text-blue-500">
            {item.partyName}
          </span>
          <a
            href="#"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded mt-2 dark:text-blue-400 border border-blue-400"
          >
            {item.addr.toString().slice(0,15)+ "...." + item.addr.toString().slice(30) }
          </a>
        </div>

        <div className="flex justify-center w-full mb-3">
          <button
            type="button"
            onClick={() => casteVote(eid,item.id,address)}
            // disabled={true}disabled:opacity-50
            className="inline-flex  items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Votes
            {/* <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {item.votes}
            </span> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default ContestantCard;
