import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Referral = () => {
  return (
    <div>
      <Navbar />
      <div class="w-full">
        {/* Button */}
        <div class="flex justify-center">
          <div class="bg-blue-800 hover:bg-blue-300 text-gray-50 font-bold mx-4 my-4 py-2 px-4 rounded-lg inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <span class="ml-2">Your referral code : e45x84o</span>
          </div>
        </div>
        {/* Button */}
      </div>
      <div>
        <h1 class="text-center font-bold py-10 text-3xl">
          Referral Challenge
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
            Leaderboard
          </span>
        </h1>
      </div>
      <div class="mb-24">
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Postition
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        No.of Referral
                      </th>
                      <th scope="col" class="px-6 py-4">
                        No.of Votes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td class="whitespace-nowrap px-6 py-4">Aswathy</td>
                      <td class="whitespace-nowrap px-6 py-4">76</td>
                      <td class="whitespace-nowrap px-6 py-4">49</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                      <td class="whitespace-nowrap px-6 py-4">Guru</td>

                      <td class="whitespace-nowrap px-6 py-4">43</td>
                      <td class="whitespace-nowrap px-6 py-4">19</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                      <td class="whitespace-nowrap px-6 py-4">Barath</td>
                      <td class="whitespace-nowrap px-6 py-4">40</td>
                      <td class="whitespace-nowrap px-6 py-4">15</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">4</td>
                      <td class="whitespace-nowrap px-6 py-4">Siddharth</td>
                      <td class="whitespace-nowrap px-6 py-4">25</td>
                      <td class="whitespace-nowrap px-6 py-4">9</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">5</td>
                      <td class="whitespace-nowrap px-6 py-4">Dharshana</td>
                      <td class="whitespace-nowrap px-6 py-4">19</td>
                      <td class="whitespace-nowrap px-6 py-4">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Referral;
