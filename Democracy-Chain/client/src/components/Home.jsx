import React, { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/Context";
const Home = () => {
  const [tabId, setTabId] = useState(1);
  const {address} = useContext(DataContext);
  return (
    <>
      <div className=" flex justify-center items-center h-[50%] p-10 mt-10">
        <section className="bg-white dark:bg-gray-900 container">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              {address && <NavLink to="/election-polls"
                
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Election Polls
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </NavLink>}
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* <div className=" h-screen mt-10 w-full flex justify-center p-10">
        <div className=" container h-[90%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select tab
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Statistics</option>
              <option>Services</option>
              <option>FAQ</option>
            </select>
          </div>
          <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li className="w-full">
              <button
                id="stats-tab"
                data-tabs-target="#stats"
                type="button"
                role="tab"
                onClick={() => setTabId(1)}
                className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Statistics
              </button>
            </li>
            <li className="w-full">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                onClick={() => setTabId(2)}
                className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Services
              </button>
            </li>
            <li className="w-full">
              <button
                id="faq-tab"
                data-tabs-target="#faq"
                type="button"
                role="tab"
                onClick={() => setTabId(3)}
                className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                FAQ
              </button>
            </li>
          </ul>
          <div className="border-t border-gray-200 dark:border-gray-600">
            {tabId === 1 && (
              <div
                className=" p-4 mt-10 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                id="stats"
                role="tabpanel"
                aria-labelledby="stats-tab"
              >
                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      Developers
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      Public repositories
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      Open source projects
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      Contributors
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      Top Forbes companies
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      Organizations
                    </dd>
                  </div>
                </dl>
              </div>
            )}
            {tabId == 2 && (
              <div
                className="p-10 bg-white rounded-lg md:p-8 dark:bg-gray-800 flex justify-center flex-col"
                aria-labelledby="about-tab"
              >
                <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  We invest in the world’s potential
                </h2>

                <ul
                  role="list"
                  className="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight">
                      Dynamic reports and dashboards
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight">
                      Templates for everyone
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight">Development workflow</span>
                  </li>
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight">
                      Limitless business automation
                    </span>
                  </li>
                </ul>
              </div>
            )}
            {tabId == 3 && (
              <div
                className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                id="faq"
                role="tabpanel"
                aria-labelledby="faq-tab"
              >
                <div
                  id="accordion-flush"
                  data-accordion="collapse"
                  data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  data-inactive-classes="text-gray-500 dark:text-gray-400"
                >
                  <h2 id="accordion-flush-heading-1">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                      data-accordion-target="#accordion-flush-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-flush-body-1"
                    >
                      <span>What is Flowbite?</span>
                      <svg
                        data-accordion-icon
                        className="w-6 h-6 rotate-180 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-flush-body-1"
                    className=""
                    aria-labelledby="accordion-flush-heading-1"
                  >
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive
                        components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{" "}
                        <a
                          href="/docs/getting-started/introduction/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          get started
                        </a>{" "}
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                      </p>
                    </div>
                  </div>
                  <h2 id="accordion-flush-heading-2">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                      data-accordion-target="#accordion-flush-body-2"
                      aria-expanded="false"
                      aria-controls="accordion-flush-body-2"
                    >
                      <span>Is there a Figma file available?</span>
                      <svg
                        data-accordion-icon
                        className="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-flush-body-2"
                    className=""
                    aria-labelledby="accordion-flush-heading-2"
                  >
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the
                        Figma software so everything you see in the library has
                        a design equivalent in our Figma file.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out the{" "}
                        <a
                          href="https://flowbite.com/figma/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Figma design system
                        </a>{" "}
                        based on the utility classes from Tailwind CSS and
                        components from Flowbite.
                      </p>
                    </div>
                  </div>
                  <h2 id="accordion-flush-heading-3">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                      data-accordion-target="#accordion-flush-body-3"
                      aria-expanded="false"
                      aria-controls="accordion-flush-body-3"
                    >
                      <span>
                        What are the differences between Flowbite and Tailwind
                        UI?
                      </span>
                      <svg
                        data-accordion-icon
                        className="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-flush-body-3"
                    className=""
                    aria-labelledby="accordion-flush-heading-3"
                  >
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from
                        Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is
                        that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of
                        pages.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite,
                        Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two
                        worlds.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Learn more about these technologies:
                      </p>
                      <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                        <li>
                          <a
                            href="https://flowbite.com/pro/"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Flowbite Pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindui.com/"
                            rel="nofollow"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Tailwind UI
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
