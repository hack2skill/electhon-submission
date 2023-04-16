import Spinner from "@/components/Spinner";
import { generateJingle, saveJingle } from "@/http/api";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Create() {
  const [sloganDetails, setSloganDetails] = useState({
    title: "",
    gender: "male",
    ageGroup: "youth",
    occupation: "salaried",
    demographic: "urban",
    keywords: [],
    language: "hindi",
  });
  const [jingleText, setJingleText] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [jingleList, setJingleList] = useState([]);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const generateSloganForPoster = async () => {
    setIsLoading(true);
    setJingleText("");
    setJingleList([]);
    generateJingle(sloganDetails).then((response) => {
      setJingleList(response.jingles);
      setJingleText(response.jingles[0].jingle);
      setIsLoading(false);
      toast.success("Generated");
    });
  };

  const publishJingle = () => {
    if (!jingleText) {
      toast.error("Please generate a jingl!");
      return;
    }
    setIsBtnLoading(true);
    saveJingle({
      ...sloganDetails,
      jingle: jingleText,
    }).then((res) => {
      setIsBtnLoading(false);
      toast.success("Saved & published");
    });
  };

  return (
    <div>
      <div className="flex min-h-screen flex-col justify-between p-16">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Create Jingles
          </h2>
          <p className="text-gray-500 mb-6">
            Generate rhyming jingles or anthems for campaigns.
          </p>
          <div className="flex flex-row">
            <div className="mr-12">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-4">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={sloganDetails.title}
                      onChange={(e) =>
                        setSloganDetails({
                          ...sloganDetails,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="gender">Gender</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <select
                        id="gender"
                        className="px-4  outline-none text-gray-800 w-full bg-transparent"
                        value={sloganDetails.gender}
                        onChange={(e) =>
                          setSloganDetails({
                            ...sloganDetails,
                            gender: e.target.value,
                          })
                        }
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="ageGroup">Age group</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <select
                        id="ageGroup"
                        className="px-4  outline-none text-gray-800 w-full bg-transparent"
                        value={sloganDetails.ageGroup}
                        onChange={(e) =>
                          setSloganDetails({
                            ...sloganDetails,
                            ageGroup: e.target.value,
                          })
                        }
                      >
                        <option selected>Choose a age group</option>
                        <option value="youth">Youth</option>
                        <option value="elderly">Elderly</option>
                        <option value="middle-aged">Middle-aged</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="occupation">Occupation</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <select
                        id="occupation"
                        className="px-4  outline-none text-gray-800 w-full bg-transparent"
                        value={sloganDetails.occupation}
                        onChange={(e) =>
                          setSloganDetails({
                            ...sloganDetails,
                            occupation: e.target.value,
                          })
                        }
                      >
                        <option selected>Select occupation</option>
                        <option value="salaried">Salaried</option>
                        <option value="business">Business</option>
                        <option value="student">Student</option>
                        <option value="unemployed">Unemployed</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="demographic">Demographic</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <select
                        id="demographic"
                        className="px-4  outline-none text-gray-800 w-full bg-transparent"
                        value={sloganDetails.demographic}
                        onChange={(e) =>
                          setSloganDetails({
                            ...sloganDetails,
                            demographic: e.target.value,
                          })
                        }
                      >
                        <option value="rural">Rural</option>
                        <option value="urban">Urban</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="language">Language</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <select
                        id="language"
                        className="px-4  outline-none text-gray-800 w-full bg-transparent"
                        value={sloganDetails.language}
                        onChange={(e) =>
                          setSloganDetails({
                            ...sloganDetails,
                            language: e.target.value,
                          })
                        }
                      >
                        <option value="arabic">Arabic - العربية</option>
                        <option value="bengali">Bengali - বাংলা</option>
                        <option value="english">English</option>
                        <option value="gujrati">Gujarati - ગુજરાતી</option>
                        <option value="hindi">Hindi - हिन्दी</option>
                        <option value="kannada">Kannada - ಕನ್ನಡ</option>
                        <option value="marathi">Marathi - मराठी</option>
                        <option value="oriya">Oriya - ଓଡ଼ିଆ</option>
                        <option value="punjabi">Punjabi - ਪੰਜਾਬੀ</option>
                        <option value="tamil">Tamil - தமிழ்</option>
                        <option value="telugu">Telugu - తెలుగు</option>
                        <option value="urdu">Urdu - اردو</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="keywords">
                      Other keywords(comma separated)
                    </label>
                    <input
                      type="text"
                      name="keywords"
                      id="krywords"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={(e) =>
                        setSloganDetails({
                          ...sloganDetails,
                          keywords: e.target.value.split(",").join().split(" "),
                        })
                      }
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={generateSloganForPoster}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg w-full mt-12">
                <h2 className="font-semibold text-xl text-gray-600 mb-8">
                  Jingles
                </h2>
                <div>
                  {jingleList?.length ? (
                    <div>
                      {jingleList.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-start mb-1"
                        >
                          <input
                            id="checkbox-1"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mr-2 mt-1"
                            checked={item?.jingle === jingleText}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setJingleText(item?.jingle);
                              }
                            }}
                          />
                          <input
                            type="text"
                            name="slogan"
                            id="slogan"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={item?.jingle}
                          />
                          {/* <p>{item?.jingle}</p> */}
                        </div>
                      ))}
                    </div>
                  ) : isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Spinner />
                    </div>
                  ) : (
                    <div>
                      <p>Your generated jingles will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-1/3 bg-gray-100 p-8 rounded-lg w-1/2 min-h-max">
              {jingleText ? (
                <div>
                  <p>{jingleText}</p>
                  <div className="flex flex-row justify-between items-center items-end mt-12">
                    <div>
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="p-2 text-white font-medium text-sm leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                        style={{ backgroundColor: "#d62976" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          className="w-5 h-5 float-left"
                        >
                          <path
                            fill="currentColor"
                            d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="p-2 ml-2 text-white font-medium text-sm leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                        style={{ backgroundColor: "#25d366" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          className="w-5 h-5 float-left"
                        >
                          <path
                            fill="currentColor"
                            d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={publishJingle}
                    >
                      {isBtnLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                          <div className="ml-2"> saving... </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <div> Publish Jingle</div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              ) : isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                <p>Your generated jingle will appear here</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
