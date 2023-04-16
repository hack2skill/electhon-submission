import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OTPPage() {
  return (
    <>
      <div>
        <Navbar />
        <form class="mt-8 space-y-6">
          <div
            class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            style={{ "padding-top": "20px" }}
          >
            <div class="max-w-md w-full space-y-8">
              <div class="mb-10">
                <div class="flex justify-center">
                  <img alt="" class="h-14 w-14" src="/assets/logo.png" />
                </div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  OTP Verification
                </h2>
                <p class="text-center text-sm text-gray-600 mt-5">
                  <a
                    class="font-medium text-blue-600 hover:text-blue-500"
                    href="/login"
                  ></a>
                </p>
              </div>
              <div class="-space-y-px">
                <div class="my-5">
                  <label for="voter-id" class="sr-only">
                    Enter OTP
                  </label>
                  <input
                    id="voter-id"
                    name="voterid"
                    type="string"
                    required=""
                    class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                    placeholder="Enter OTP"
                    value=""
                  />
                </div>
              </div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <br />
        <Footer />
      </div>
    </>
  );
}
