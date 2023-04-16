import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import requireAuth from "../utils/requireAuth";
import axios from "../utils/axios";
import download from "js-file-download";

const DigitalVoterSlip = () => {
  useEffect(() => {
    requireAuth("/login", "/digitalslip").then((data) => {});
  }, []);

  function handleDownload() {
    axios()
      .post(
        `/testpdf`,
        {},
        {
          responseType: "blob",
          headers: {
            Accept: "application/pdf",
          },
        }
      )
      .then((response) => {
        download(response.data, "booth_slip.pdf");
      })
      .catch((error) => {
        alert("The file couldn't be downloaded");
      });
  }

  return (
    <div>
      <Navbar />
      <div class="mt-8 space-y-6">
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
                Generate your digital voter slip
              </h2>
              <p class="text-center text-sm text-gray-600 mt-5">
                {/*<a*/}
                {/*  class="font-medium text-blue-600 hover:text-blue-500"*/}
                {/*  // href={`${process.env.REACT_APP_BACKEND_DOMAIN}/voterslip?token=${ge}`}*/}
                {/*></a>*/}
              </p>
            </div>
            <button
              onClick={() => handleDownload()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
            >
              Download Voter Slip
            </button>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default DigitalVoterSlip;
