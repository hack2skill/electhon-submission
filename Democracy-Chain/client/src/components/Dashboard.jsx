import React,{useContext} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { DataContext } from "../context/Context";
import Coupon from "../utils/Coupon";
import {coupons} from "../utils/dummy_data/coupons";
import ProblemForm from "../utils/ProblemForm";
import NFTCard from "../utils/NFTCard";
const Dashboard = () => {
  
  const navigate= useNavigate();
  const { problemForm,setProblemForm,setAuthUser,newusers } = useContext(DataContext);
  return (
    <>
      <div
        id="app"
        className="md:flex antialiased"
        style={{ marginTop: "65px" }}
      >
        <aside className="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
          <header className="border-b border-solid border-gray-800 flex-grow">
            <h1 className="py-6 px-4 font-bold text-gray-100 text-base">
              Dashboard
            </h1>
          </header>
          <nav className="overflow-y-auto h-full flex-grow">
            <ul className="font-medium px-4 text-left">
              <li className="text-gray-100">
                <button className="rounded mt-2 cursor-pointer text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">
                  <NavLink to="/election-polls"> Election Polls</NavLink>
                </button>
                <button className="rounded text-sm cursor-pointer block py-3 px-6 hover:bg-blue-600 w-full text-left">
                  <NavLink to="/"> Home</NavLink>
                </button>
                
                <button className="rounded text-sm cursor-pointer block py-3 px-6 hover:bg-blue-600 w-full text-left">
                  <NavLink to="/leaderboard"> Leader-Board</NavLink>
                </button>
                <button className="rounded text-sm cursor-pointer block py-3 px-6 hover:bg-blue-600 w-full text-left" onClick={()=>{
                  setAuthUser(false);
                  navigate("/")
                }}>Log Out</button>
              </li>
            </ul>
          </nav>

          <footer className="p-4 border-t border-solid border-gray-800">
            <h4 className="pb-2  text-sm font-bold text-blue-700">
              © Democracy Chain Ltd. 2018
            </h4>
          </footer>
        </aside>

        <main className="bg-gray-100 h-screen w-full overflow-y-auto">
          <section v-if="active === 'performance'" id="performance">
            <header className="border-b border-solid border-gray-300 bg-white">
              <h2 className="p-6 text-blue-600 font-bold">Performance</h2>
            </header>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
              <header className="border-b border-solid border-gray-300 p-4 text-lg text-blue-500 font-bold">
                Buildings Overview
              </header>
              <section className=" flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
                  <span className="text-xs text-gray-500 uppercase font-bold">
                    Total Tokens Earned
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl font-bold">205</span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
                  <span className="text-xs font-bold text-gray-500 uppercase">
                    Total NFT'S 
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl font-bold">2</span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
                  <span className="text-xs font-bold text-gray-500 uppercase">
                    Total Vote Cast
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl font-bold">4</span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase">
                    Refer And Earns
                  </span>
                  <span className="block py-4 text-black text-3xl font-bold ">
                    $9
                  </span>
                </div>
              </section>
            </section>

            <div className="flex flex-wrap flex-row">
              <div className="w-full lg:w-1/2">
                <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                  <header className="border-b border-solid border-gray-300 p-4 text-lg font-bold">
                    Latest NFT'S ( Next Phase Implementation )
                  </header>
                  <section className="overflow-x-auto w-full">
                    <table
                      className="w-full"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <li className="flex space-x-2 px-10 py-2 justify-content-baseline">
                            <NFTCard/>
                          </li>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </section>
              </div>
              <div className="w-full lg:w-1/2">
                <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                  <header className="border-b border-solid border-gray-300 p-4 text-lg font-bold">
                    Latest Coupons
                  </header>
                  <section className="overflow-x-auto w-full">
                    <table
                      className="w-full"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <li className="flex flex-col px-3">
                           {coupons.map((item, i) =><Coupon item={item}
                            key={i}/>)}
                          </li>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </section>
              </div>
            </div>
          </section>
        </main>
      </div>

      {problemForm && (
        <div className="fixed  flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-scroll md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <ProblemForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
