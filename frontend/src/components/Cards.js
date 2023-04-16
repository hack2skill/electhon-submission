import React from "react";

const Cards = () => {
  return (
    <div>
      <div class="z-50">
        <h1 class="text-center font-bold py-3 text-3xl italic">
          General
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
            Services
          </span>
        </h1>

        <div class="flex justify-center">
          <div class="mt-2 mx-10 grid md:grid-rows-2 md:grid-flow-col md:gap-10 sm:grid-rows-1 sm:grid-flow-row sm:gap-0">
            {/* Card 1*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  target="_blank"
                  href="https://voterportal.eci.gov.in/"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/jpikaoyw.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      Voter Registration
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 2*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  target="_blank"
                  href="https://voterportal.eci.gov.in/"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/puvaffet.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      Changes in Voter ID
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 3*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  target="_blank"
                  href="https://voterportal.eci.gov.in/"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/rhvddzym.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      Shift Constituency
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 4*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  href="https://affidavit.eci.gov.in/"
                  target="_blank"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/yyecauzv.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      Candidate Info
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 5*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  href="https://eci.gov.in/statistical-report/statistical-reports/"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/gqdnbnwt.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      Election Results & News
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 6*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  target="_blank"
                  href="http://maps.google.com/maps?z=12&t=m&q=loc:38.9419+-78.3020"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/zzcjjxew.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      Directions to polling Booth
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 7*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  href="/simulation"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/jqeuwnmb.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      EVM Simulation
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 8*/}
            <div class="my-5 rounded-2xl w-72 h-42 bg-gradient-to-r from-orange-600 to-blue-700 bg-clip animate-text p-1 shadow-xl">
              <div>
                <a
                  class="block text-center rounded-xl bg-white md:p-2 sm:p-6"
                  href={"/digitalslip"}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/fqrjldna.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#000000"
                    stroke="70"
                    style={{ width: "80px", height: "80px" }}
                  ></lord-icon>
                  <div class="">
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                      Digital Voter Slip
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
