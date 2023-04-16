import React from "react";
import {RiRadioButtonLine} from "react-icons/ri";
import { NavLink } from "react-router-dom";
const ElectionPollCard = ({item}) => {
  return (
    <>
      <a
       
        className="block m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:border-gray-700 "
      > 
        <RiRadioButtonLine size={30} color={item.deleted==true ? "red" :"green"} /> 
        {!(item.deleted==true) ?<span className="font-bold">Ongoing</span>:<span className="font-bold">Completed</span>}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black mt-3">
          {item.title}
        </h5>
   
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
        <p className="text-sm font-semibold mt-3 text-gray-500 dark:text-gray-400">Starting Date :  16 April </p>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Ending Date : {(item.ends)/(60*60)} Days</p>
       
        {item.deleted==true ? null :<button  className="relative inline-flex mt-2 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <NavLink to={`/election-polls/${item.id}`}>Enter Election</NavLink>
          </span>
        </button>}

        
      </a>
    </>
  );
};

export default ElectionPollCard;
