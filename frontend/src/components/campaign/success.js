import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Success = () => {
  return (
    <div>
      <Navbar />
      <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{ "padding-top": "20px" }}
      >
        <div class="max-w-md w-full space-y-8">
          <div class="mb-10">
            <br></br>
            <br></br>
            <div class="flex justify-center">
              <img alt="" class="h-20 w-20" src="/assets/tick.png" />
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Successfully Submitted. You will be notified via Email when the
              admin approves the request.
            </h2>
            <p class="text-center text-sm text-gray-600 mt-5">
              <a
                class="font-medium text-blue-600 hover:text-blue-500"
                href="/login"
              ></a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Success;
