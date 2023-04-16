import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { toast } from "react-toastify";
import auth from "../../utils/auth";
import axios from "../../utils/axios";

const AdminLogin = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    toast.promise(axios().post("/admin/login", data), {
      pending: {
        render() {
          return "Logging in......";
        },
      },
      success: {
        render({ data }) {
          auth().setToken(data.data, "/admin/dashboard");
          return "Logged in successfully";
        },
      },
      error: {
        render({ data }) {
          let status = data.response.status;
          data = data.response.data;
          if (status === 404) {
            return "Email doesn't exist. Please enter a valid Email!";
          }
          if (status === 422) {
            return Object.values(data.errors)[0].toString();
          } else {
            return "Something went wrong!";
          }
        },
      },
    });
  }

  return (
    <div>
      <Navbar />
      <form class="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
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
                Login as Admin
              </h2>
              <p class="text-center text-sm text-gray-600 mt-5"></p>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Email
                </label>
                <input
                  id="voter-id"
                  name="email"
                  type="email"
                  required={true}
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Password
                </label>
                <input
                  id="voter-id"
                  name="password"
                  type="password"
                  required={true}
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <br />
      <Footer />
    </div>
  );
};

export default AdminLogin;
