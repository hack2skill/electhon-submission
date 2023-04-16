import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Select } from "antd";
import "slick-carousel/slick/slick-theme.css";
import Hand from "../../images/Hand.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { ROUTES } from "../../routes/router.config";
import { data } from "./data";
import quiz1 from "../../images/quiz1.jpg";
import vote from "../../images/Process_images/voterawareness.jpg";
import gif from "../../images/Process_images/game.gif";
function Home() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-arrow slick-prev">{AiFillCaretLeft}</div>,
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [flag, setFlag] = useState(true);
  const [main, setMain] = useState();

  const change = (value) => {
    setLang(value.value);
    localStorage.setItem("id", value.value);
    setFlag(!false);
    setMain(localStorage.getItem("id"));
  };

  return (
    <div>
      <Navbar />
      <div className="flex text-center  justify-center">
        <p
          class="zoom-in-out-box items-center justify-center w-[15rem] mt-[2rem] middle none center rounded-lg py-3 font-sans text-3xl font-bold uppercase shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40  focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={"#login"}
        >
          Learn more about Electoral Voting
        </p>
      </div>

      <div className="flex flex-row gap-[1rem] pt-[2rem] items-center justify-center">
        <p className="text-xl font-serif pt-[1rem] ml-[4rem]">
          To Know Your Voting Booth Address <br />
        </p>
        <button
          onClick={() => navigate(ROUTES.Map)}
          className="bg-blue-500 hover:bg-blue-700 mt-[0.5rem] text-white font-bold py-2 px-4 rounded-2xl"
        >
          Click Here
        </button>
      </div>

      <div className="content">
        <Slider {...settings}>
          {data &&
            data?.map((item) => {
              return (
                <div className="h-[33rem] px-[4rem] py-[2rem] flex flex-col">
                  <div className="flex gap-[1rem] bg-amber-950 items-center justify-center">
                    <img src={Hand} className="h-[8rem] p-[1rem] rounded-3xl" />
                    <p className="text-3xl text-orange-400">
                      Election Commission Of India
                    </p>
                  </div>
                  <div className="bg-slate-200 shadow-2xl">
                    <div className="flex justify-end items-end">
                      <Select
                        labelInValue
                        defaultValue="Select Language"
                        style={{
                          width: 180,
                        }}
                        onChange={(value) => change(value)}
                        className="mt-[1rem] mr-[2rem]"
                        options={[
                          {
                            value: "1",
                            label: "Hindi",
                          },
                          {
                            value: "2",
                            label: "Kannada",
                          },
                          {
                            value: "3",
                            label: "English",
                          },
                        ]}
                      />
                    </div>
                    <h3 className="px-[4rem] h-[15rem] font-serif text-2xl">
                      {main == 3 ? (
                        <p className="text-red-600 text-3xl">
                          {item?.question_e}
                        </p>
                      ) : main == 2 ? (
                        <p className="text-red-600">{item?.question_k}</p>
                      ) : main == 1 ? (
                        <p className="text-red-600">{item?.question_h}</p>
                      ) : (
                        <p className="text-red-600 text-3xl">
                          {item?.question_e}
                        </p>
                      )}
                      <br />
                      {main == 3
                        ? item?.content_e
                        : main == 2
                        ? item?.content_k
                        : main == 1
                        ? item?.content_h
                        : item?.content_e}
                    </h3>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>

      <div className="shadow-2xl mx-16 mt-[2rem] h-[5rem]">
        <p className="flex items-center text-[2.5rem] font-bold text-orange-400 mt-[4rem] underline justify-center">
          -------- Know More About Electoral Process via Game --------
        </p>
      </div>
      <div className="flex flex-row bg-slate-300 pt-[1rem] items-center justify-center gap-[6rem]">
        <div>
          <div className="flex flex-row w-full pt-[4rem] h-screen">
            <div class="block h-[40rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg h-[17rem] w-[28rem]"
                  alt=""
                  src={vote}
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
                  EXPLORE VOTING PROCESS
                </h5>
                <p class="text-xl">
                  Voting is a fundamental right and a crucial aspect of
                  democracy. It is the responsibility of every citizen to vote
                  in the elections and make their voice heard. To help the youth
                  understand the voting process better, we have developed a page
                  that provides complete information about the voting process.
                </p>
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.Process)}
                  class="inline-block w-[8rem] text-lg rounded ml-[8rem] bg-primary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row w-full pt-[4rem] h-screen">
            <div class="block h-[39rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
              <a href="#!">
                <img class="rounded-t-lg h-[17rem]" alt="" src={quiz1} />
              </a>
              <div class="p-6">
                <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
                  QUIZ TIME
                </h5>
                <p class="text-xl">
                  In today's world, it is essential to have knowledge about the
                  electoral system, especially for the youth who will be the
                  future of our society. With the aim of promoting electoral
                  knowledge among the youth, we have arranged a quiz on our
                  website. Try it !!
                </p>
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.Quiz)}
                  class="inline-block w-[8rem] text-lg rounded mt-[2rem] ml-[8rem] bg-primary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row w-full pt-[4rem] h-screen">
            <div class="block h-[39rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg h-[17rem]"
                  src={gif}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 flex items-center justify-center text-xl text-blue-500 font-medium leading-tight">
                 METAVERSE GAME
                </h5>
                <p class="mb-4 text-xl">
                  Games are an excellent way to engage and entertain people, and
                  they can also be an effective way to educate people. With this
                  in mind, we have developed a game on our website that will not
                  only entertain but also educate the players. Try It !!
                </p>
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.Quiz)}
                  class="inline-block w-[8rem] text-lg rounded mt-[1rem] ml-[8rem] bg-primary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
