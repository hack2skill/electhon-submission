import React from "react";
import Election from "../../images/Election.png";
import Hack2Skill from "../../images/Hack2Skill.png";
import { ROUTES } from "../../routes/router.config";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Hand from "../../images/Hand.png";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[140px] w-full gap-[5rem] pt-[1rem] grid grid-cols-3 nav shadow-2xl">
      <div className="col-span-1 justify-center flex">
        <img src={Hack2Skill} alt="" className="h-[110px] mr-[6rem]" />
      </div>
      <div className="col-span-1 ml-[4rem] flex">
        <div className="flex">
          <div>
            <img src={Hand} alt="" className="h-[110px] ml-[rem]" />
          </div>
          <div className="ml-[1.5rem] text-left">
            <p className="font-semibold text-3xl text-white">
              Election Commission{" "}
              <span className="flex items-center justify-center">Of India</span>
            </p>
            <p className="pt-[0.4rem] text-2xl text-white flex items-center justify-center">
              Electhon'23
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-row">
        <img
          src={Election}
          alt=""
          className="h-[110px] w-[10rem] rounded-[5rem] ml-[10rem]"
        />
        <button
          onClick={() => navigate(ROUTES.Home)}
          className="bg-blue-500 hover:bg-blue-700 mt-[3.5rem] text-white font-bold pb-[0.6rem] px-4 mx-[4rem] rounded-2xl h-[3rem] w-[6rem]"
        >
          <HomeOutlined />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
