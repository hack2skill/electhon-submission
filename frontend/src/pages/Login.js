import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import auth from "../utils/auth";
import RouteHelper from "../utils/routeHelper";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [isOtpSent, setOtpSent] = useState(false);

  const [voterId, setVoterId] = useState("");
  const [otp, setOtp] = useState("");

  const search = useLocation().search;
  const intended = new URLSearchParams(search).get("intended");

  useEffect(() => {
    auth()
      .fetchUser()
      .then((response) => {
        if (response.isAuth) {
          RouteHelper.redirect("/");
        }
      });
  }, []);

  function handleLogin() {
    toast.promise(
      auth().login({
        voter_id: voterId,
      }),
      {
        pending: {
          render() {
            return "Sending OTP......";
          },
        },
        success: {
          render({ data }) {
            setOtpSent(true);
            return "OTP sent successfully";
          },
        },
        error: {
          render({ data }) {
            setOtpSent(false);
            let status = data.response.status;
            data = data.response.data;
            if (status === 404) {
              return "Voter ID doesn't exist. Please enter a valid Voter ID!";
            }
            if (status === 422) {
              return Object.values(data.errors)[0].toString();
            } else {
              return "Something went wrong!";
            }
          },
        },
      }
    );
  }

  function handleVerify() {
    toast.promise(
      auth().verify({
        code: otp,
        voter_id: voterId,
      }),
      {
        pending: {
          render() {
            return "Verifying OTP......";
          },
        },
        success: {
          render({ data }) {
            auth().setToken(data.data, intended ?? "/");
            return "OTP verified successfully";
          },
        },
        error: {
          render({ data }) {
            setOtpSent(false);
            let status = data.response.status;
            data = data.response.data;
            if (status === 404) {
              return "Voter ID doesn't exist. Please enter a valid Voter ID!";
            }
            if (status === 422) {
              return Object.values(data.errors)[0].toString();
            } else {
              return "Something went wrong!";
            }
          },
        },
      }
    );
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
                Login to your account
              </h2>
              <p class="text-center text-sm text-gray-600 mt-5">
                <a
                  class="font-medium text-blue-600 hover:text-blue-500"
                  href="/login"
                ></a>
              </p>
            </div>
            {!isOtpSent ? (
              <div>
                {" "}
                <div class="-space-y-px">
                  <div class="my-5">
                    <label for="voter-id" class="sr-only">
                      Voter ID
                    </label>
                    <input
                      id="voter-id"
                      type="string"
                      required={true}
                      className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                      placeholder="Voter ID"
                      value={voterId}
                      onChange={(e) => setVoterId(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleLogin()}
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-8"
                >
                  Send OTP
                </button>
              </div>
            ) : (
              <div>
                <div className="-space-y-px">
                  <div className="my-5">
                    <label htmlFor="voter-id" className="sr-only">
                      Enter OTP
                    </label>
                    <input
                      id="voter-id"
                      type="text"
                      required={true}
                      className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleVerify()}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
                >
                  Verify
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Login;
