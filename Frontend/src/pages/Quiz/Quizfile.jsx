import React from "react";
import { toastify, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import quiz from "../../images/quiz.jpg";
import { data } from "../../Components/Quiz/Quiz";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Navbar from "../../Components/Navbar/Navbar";
import "./Quiz.css";
const Quizfile = () => {
  const [yes, setYes] = useState("");
  const [no, setNo] = useState("");
  const [id, setId] = useState();

  console.log(yes,no,id);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex items-center justify-center">
        <img src={quiz} className="h-[12rem] rounded-2xl abc w-[14rem]" />
        <p className="text-[3rem] font-extrabold text-blue-400 drop-shadow-lg">
          It is Quiz Time. Learn and spread Awareness on Voting !!{" "}
        </p>
      </div>
      <div className="mt-[3rem]">
        {data &&
          data?.map((item, key) => {
            return (
              <div
                className={`px-[6rem] py-[2rem] mx-[3rem] h-[15rem] shadow-2xl`}
              >
                <p className="text-blue-800 font-semibold text-xl">{item?.question}</p>
                <br />
                <div
                  onClick={() => {
                    setYes("Yes")
                    setNo("")
                    setId(item?.id)
                  }}
                  className={`flex px-[1rem] cursor-pointer border-dotted items-center border-2 rounded-lg ${
                    (yes === item?.answer && item?.id === id) ||
                    (no && no !== item?.answer && item?.id === id)
                      ? "bg-green-500"
                      : yes && yes !== item?.answer && item?.id === id
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  <AiFillLike className="" />
                  <p className="text-xl ml-[0.8rem]">YES</p>
                </div>

                <div
                  onClick={() => {
                    setNo("No");
                    setYes("");
                    setId(item?.id);
                  }}
                  className={`flex px-[1rem] mt-[1rem] cursor-pointer border-dotted items-center border-2 rounded-lg ${
                    (no === item?.answer && item?.id === id) ||
                    (yes && yes !== item?.answer && item?.id === id)
                      ? "bg-green-500"
                      : no && no !== item?.answer && item?.id === id
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  <AiOutlineDislike />
                  <p className="text-xl ml-[0.8rem]">NO</p>
                </div>
                <div className="text-xl mt-[0.5rem]">
                  {(yes !== item?.answer && yes && item?.id === id) ||
                  (no !== item?.answer && no && item?.id === id)
                    ? item?.explaination
                    : ""}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Quizfile;
