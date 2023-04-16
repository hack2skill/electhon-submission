import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Poster = () => {
  return (
    <div>
      <Navbar />
      <div class="w-full">
        {/* Button */}
        <div class="flex justify-end ">
          <button class="bg-blue-800 hover:bg-blue-300 text-gray-50 font-bold mx-4 my-4 py-2 px-4 rounded-lg inline-flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Add your poster design</span>
          </button>
        </div>
        {/* Button */}
      </div>
      <div>
        <h1 class="text-center font-bold py-10 text-3xl">
          Poster Challenge
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
                        Design Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        No.of downloads
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td class="whitespace-nowrap px-6 py-4">Aswathy</td>
                      <td class="whitespace-nowrap px-6 py-4">Let's Vote</td>
                      <td class="whitespace-nowrap px-6 py-4">1249</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                      <td class="whitespace-nowrap px-6 py-4">Guru</td>

                      <td class="whitespace-nowrap px-6 py-4">
                        Make a change !
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">1099</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                      <td class="whitespace-nowrap px-6 py-4">Barath</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        Democratic Responsibility
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">850</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">4</td>
                      <td class="whitespace-nowrap px-6 py-4">Siddharth</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        Vote for change
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">649</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-blue-200 ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">5</td>
                      <td class="whitespace-nowrap px-6 py-4">Dharshana</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        Cast your vote
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">499</td>
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

export default Poster;
