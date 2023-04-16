import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { toast } from "react-toastify";
import auth from "../../utils/auth";
import axios from "../../utils/axios";
import RouteHelper from "../../utils/routeHelper";

const DetailForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    toast.promise(axios().post("/campaign", data), {
      pending: {
        render() {
          return "Submitting......";
        },
      },
      success: {
        render({ data }) {
          RouteHelper.redirect("/success");
          return "Submitted successfully";
        },
      },
      error: {
        render({ data }) {
          let status = data.response.status;
          data = data.response.data;

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
      <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                Register your Institution
              </h2>
              <p class="text-center text-sm text-gray-600 mt-5"></p>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Name
                </label>
                <input
                  id="voter-id"
                  name="name"
                  type="string"
                  required={true}
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Name of the Institution"
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Address
                </label>
                <textarea
                  id="voter-id"
                  name="address"
                  required={true}
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Address"
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Institution
                </label>
                <select
                  id="voter-id"
                  name="is_school"
                  required={true}
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                >
                  <option value={""}>Select School / College</option>
                  <option value={1}>School</option>
                  <option value={0}>College</option>
                </select>
              </div>
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
                  Mobile
                </label>
                <input
                  id="voter-id"
                  name="phone"
                  type="string"
                  required={true}
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Mobile number"
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Url
                </label>
                <input
                  id="voter-id"
                  name="google_sheets_url"
                  type="string"
                  required={true}
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Google sheet URL"
                />
              </div>
            </div>
            <p class="text-sky-900">
              Note : Sheet could contains the following columns as mandatory:
              Student name , Roll no, Date Of Birth , Aadhar number.
            </p>
            <div>
              <button
                type={"submit"}
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <Footer />
    </div>
  );
};

export default DetailForm;
