import React from "react";
import Navbar from "../components/Navbar";

const CandidateInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div className="w-full mx-auto">
            <div className="flex justify-between mt-4 mx-10 items-center"></div>
            <form className=" bg-[#1e40af] rounded-xl mx-10 mt-10 p-5">
              <h1 className="desc text-lg text-white">Search Your Candidate</h1>
              <div className="flex space-x-4 items-center mt-5 mb-2">
                <input
                  className="rounded-md desc text-lg px-4 py-2 w-full"
                  name="name"
                />
                <button className="py-3 px-4 title bg-black rounded-xl">
                  Search
                </button>
              </div>
              <div id="filters">
                <div className="col-lg-4 mx-auto space p-5 rounded shadow">
                  <ul class="flex flex-row space-x-2 ml-6">
                    <div className="text-base font-medium text-gray-900">
                      Age :
                    </div>
                    <li class="min-w-max ">
                      <div class="md:ml-2 flex items-center">
                        <input
                          checked-id="20-30"
                          name="ages[]"
                          value="20-30"
                          type="checkbox"
                          class="accent-lime-500 h-5 w-5 rounded-full shadow"
                        />
                        <label
                          for="20-30"
                          class="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                        >
                          20 - 30
                        </label>
                      </div>
                    </li>
                    <li class="min-w-max ">
                      <div class="md:ml-2 flex items-center">
                        <input
                          checked-id="30-40"
                          name="ages[]"
                          value="30-40"
                          type="checkbox"
                          class="accent-lime-500 h-5 w-5 rounded-full shadow"
                        />
                        <label
                          for="30-40"
                          class="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                        >
                          30 - 40
                        </label>
                      </div>
                    </li>
                    <li class="min-w-max ">
                      <div class="md:ml-2 flex items-center">
                        <input
                          checked-id="40-50"
                          name="ages[]"
                          value="40-50"
                          type="checkbox"
                          class="accent-lime-500 h-5 w-5 rounded-full shadow"
                        />
                        <label
                          for="40-50"
                          class="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                        >
                          40 - 50
                        </label>
                      </div>
                    </li>
                    <li class="min-w-max ">
                      <div class="md:ml-2 flex items-center">
                        <input
                          checked-id="50-60"
                          name="ages[]"
                          value="50-60"
                          type="checkbox"
                          class="accent-lime-500 h-5 w-5 rounded-full shadow"
                        />
                        <label
                          for="50-60"
                          class="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                        >
                          50 - 60
                        </label>
                      </div>
                    </li>
                    <li class="min-w-max ">
                      <div class="md:ml-2 flex items-center">
                        <input
                          checked-id="60-120"
                          name="ages[]"
                          value="60-120"
                          type="checkbox"
                          class="accent-lime-500 h-5 w-5 rounded-full shadow"
                        />
                        <label
                          for="60-120"
                          class="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                        >
                          60 and above
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-row mt-2">
                    <div className="mt-2 mr-3 ml-6 text-base font-medium text-gray-900">
                      Arrest Date :{" "}
                    </div>
                    <div className="mt-2">
                      <input
                        name="arrest_date"
                        type="date"
                        data-date-format="dd/mm/yyyy"
                        className="rounded"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="sel1"
                      className="mt-2 mr-3 ml-6 text-base font-medium text-gray-900"
                    >
                      Gender :{" "}
                    </label>
                    <select
                      name="gender"
                      className="form-control rounded"
                      id="sel1"
                    >
                      <option value="">Select Gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="O">Other</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="sel1"
                      className="mt-2 mr-3 ml-6 text-base font-medium text-gray-900"
                    >
                      State :{" "}
                    </label>
                    <select
                      name="state"
                      className="form-control rounded"
                      id="sel1"
                    >
                      <option value="">Select State</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Goa">Goa</option>
                    </select>
                  </div>
                </div>
                {/* <div className="flex justify-end">
                  <button className="py-3 px-4 title bg-black rounded-xl mt-4">
                    Apply filters
                  </button>
                </div> */}
              </div>
            </form>

            <div id="cards" className="mt-10 mx-10">
              <div className="grid grid-cols-2">
                <div
                  id="card"
                  className=" shadow-2xl bg-[#dfdfe520] backdrop-filter backdrop-blur-3xl  border-[#575555] rounded-lg m-2 p-4"
                >
                  <div className="flex justify-end">
                    <span class="whitespace-nowrap rounded-full bg-[#1e40af] px-2.5 py-0.5 text-xs text-black text-end"></span>
                  </div>
                  <div className="flex space-x-3">
                    <div className="space-y-2">
                      <div className="flex space-x-3">
                        <div className="desc text-gray-500 text-sm">Name</div>
                        <div className="desc text-gray-400 text-sm">Name</div>
                      </div>
                      <div className="flex space-x-5">
                        <div className="flex space-x-3">
                          <div className="desc text-gray-500 text-sm">Age</div>
                          <div className="desc text-gray-400 text-sm">Age</div>
                        </div>
                        <div className="flex space-x-3">
                          <div className="desc text-gray-500 text-sm">
                            Arrested on
                          </div>
                          <div className="desc text-gray-400 text-sm">
                            Arrested on
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="desc text-gray-500 text-sm">
                          Location
                        </div>
                        <div className="desc text-gray-400 text-sm">
                          Location{" "}
                        </div>
                      </div>
                      <br />
                      <div className="flex justify-start">
                        <div className="bg-[#1e40af] text-center text-black desc w-1/2 rounded-xl p-1 title">
                          View more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div
                  id="card"
                  className=" shadow-2xl bg-[#dfdfe520] backdrop-filter backdrop-blur-3xl  border-[#575555] rounded-lg m-2 p-4"
                >
                  <div className="flex justify-end">
                    <span class="whitespace-nowrap rounded-full bg-[#1e40af] px-2.5 py-0.5 text-xs text-black text-end"></span>
                  </div>
                  <div className="flex space-x-3">
                    <div className="space-y-2">
                      <div className="flex space-x-3">
                        <div className="desc text-gray-500 text-sm">Name</div>
                        <div className="desc text-gray-400 text-sm">Name</div>
                      </div>
                      <div className="flex space-x-5">
                        <div className="flex space-x-3">
                          <div className="desc text-gray-500 text-sm">Age</div>
                          <div className="desc text-gray-400 text-sm">Age</div>
                        </div>
                        <div className="flex space-x-3">
                          <div className="desc text-gray-500 text-sm">
                            Arrested on
                          </div>
                          <div className="desc text-gray-400 text-sm">
                            Arrested on
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="desc text-gray-500 text-sm">
                          Location
                        </div>
                        <div className="desc text-gray-400 text-sm">
                          Location{" "}
                        </div>
                      </div>
                      <br />
                      <div className="flex justify-start">
                        <div className="bg-[#1e40af] text-center text-black desc w-1/2 rounded-xl p-1 title">
                          View more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateInfo;
