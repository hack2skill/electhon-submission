import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const TimeSlot = () => {
  return (
    <div>
      <Navbar />
      <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{ "padding-top": "20px" }}
      >
        <div class=" w-full space-y-8">
          <div class="mb-10">
            <h2 class="w-full mt-6 text-center text-xl font-extrabold bg-gradient-to-r from-orange-600 to-blue-700 bg-clip-text animate-text text-transparent">
              Your Allocated Polling Booth : Coimbatore
            </h2>
          </div>
          <div class="grid md:grid-rows-3 md:grid-flow-col border rounded-lg p-5">
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 1</h2>
              <p className="text-gray-500">Timings : 7.00 am - 8.00 am</p>
              <p className="text-gray-500">Count left : 6</p>
            </div>
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 2</h2>
              <p className="text-gray-500">Timings : 8.00 am - 9.00 am</p>
              <p className="text-gray-500">Count left : 18</p>
            </div>
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 3</h2>
              <p className="text-gray-500">Timings : 9.00 am - 10.00 am</p>
              <p className="text-gray-500">Count left : 2 </p>
            </div>
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 4</h2>
              <p className="text-gray-500">Timings : 10.00 am - 11.00 am</p>
              <p className="text-gray-500">Count left : 48</p>
            </div>
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 5</h2>
              <p className="text-gray-500">Timings : 11.00 am - 12.00 pm</p>
              <p className="text-gray-500">Count left : 33</p>
            </div>
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 6</h2>
              <p className="text-gray-500">Timings : 12.00 pm - 1.00 pm</p>
              <p className="text-gray-500">Count left : 60</p>
            </div>
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 7</h2>
              <p className="text-gray-500">Timings : 1.00 pm - 2.00 pm</p>
              <p className="text-gray-500">Count left : 60</p>
            </div>
            <div className="w-full md:w-80 p-4 rounded-lg border cursor-pointer m-2 border-blue-500 hover:bg-blue-200 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-800">
              <h2 className="text-lg font-bold mb-2">Slot 8</h2>
              <p className="text-gray-500">Timings :2.00 pm - 3.00 pm</p>
              <p className="text-gray-500">Count left : 34</p>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="w-1/4  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
            >
              Book Slot
            </button>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default TimeSlot;
