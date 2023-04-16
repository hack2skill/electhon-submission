import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "../../utils/axios";
import InstitutionList from "./list";

const Dashboard = () => {
  const [data, setData] = useState(false);
  const [menu, setMenu] = useState("college");

  useEffect(() => {
    if (data === false) {
      axios()
        .get("/admin/institutions")
        .then((res) => setData(res.data));
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div class="mt-4 space-y-6">
        <div
          class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
          style={{ "padding-top": "20px" }}
        >
          <div class="max-w-md w-full space-y-8">
            <div class="mb-0">
              <div class="flex justify-center">
                {/* <img alt="" class="h-14 w-14" src="/assets/logo.png" /> */}
              </div>
              <h2 class="mt-0 text-center text-3xl font-extrabold text-gray-900">
                Choose the type of database
              </h2>
              <br></br>

              <div
                class="grid  grid-cols-3 space-x-2 rounded-xl bg-gray-200 p-2"
                x-data="app"
              >
                <div onClick={() => setMenu("school")}>
                  <input
                    type="radio"
                    name="option"
                    value={"school"}
                    checked={menu === "school"}
                    onClick={() => setMenu("school")}
                    class="peer hidden"
                  />
                  <label
                    for="1"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                  >
                    Schools
                  </label>
                </div>

                <div onClick={() => setMenu("college")}>
                  <input
                    type="radio"
                    name="option"
                    value={"college"}
                    class="peer hidden"
                    checked={menu === "college"}
                    onClick={() => setMenu("college")}
                  />
                  <label
                    for="2"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                  >
                    Colleges
                  </label>
                </div>
                <div onClick={() => setMenu("unapproved")}>
                  <input
                    type="radio"
                    name="option"
                    value={"unapproved"}
                    checked={menu === "unapproved"}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="1"
                    className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                  >
                    Unapproved
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"mx-8"}>
          <InstitutionList data={data} menu={menu} setData={setData} />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Dashboard;
