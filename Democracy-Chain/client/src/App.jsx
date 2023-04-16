import React, { useContext, useEffect, useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Navbar from "./components/Navbar";
import ElectionPolls from "./components/ElectionPolls";
import ContestentList from "./components/ContestentList";
import { Route, Routes } from "react-router-dom";
import Leader from "./components/Leader";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import ProblemsList from "./components/ProblemsList";
import { ToastContainer } from 'react-toastify';
import Error from "./components/Error";
import { DataContext } from "./context/Context";
import Dashboard from "./components/Dashboard";
import OnboardingUser from "./components/OnboardingUser";
import OnBoardingEC from "./components/OnBoardingEC";
import AadharSteps from "./components/AadharSteps";
import ReferAndEarn from "./components/Refer";
const App = () => {
  const { address, authUser } = useContext(DataContext);
  const [languages, setLanguages] = useState([]);
  const getLanguages = async () => {
    let res = await axios.get("https://libretranslate.de/languages");
    setLanguages(res.data);
  };
  useEffect(() => {
    getLanguages();
  });
  return (
    <>
      { <Navbar />}
      <Routes>
        <Route path="/" element={<OnboardingUser />} />
        <Route path="/onboarding-ec" element={<OnBoardingEC/>} />
      
        
        
        {address ? (
          <>
            <Route exact path="/election-polls" element={<ElectionPolls />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/election-polls/:id"
              element={<ContestentList />}
            />
            <Route path="/refer" element={<ReferAndEarn/>} />
            <Route path="/leaderboard" element={<Leader/>} />
            {/* <Route exact path="/problem-list" element={<ProblemsList />} /> */}
          </>
        ) : (
          <Route path="*" element={<Error />} />
        )}
      </Routes>
      <ToastContainer/>

      {/* <main className="main">
        <div className="main__wrapper">
          <div className="alert">
            Welcome in John Doe!{" "}
            <a className="alert__close" href="#">
              <i className="fa fa-close font-icon"></i>
            </a>
          </div>
          <div className="alert">
            Incorrect password!{" "}
            <a className="alert__close" href="#">
              <span className="fontawesome-remove font-icon"></span>
            </a>
          </div>
          <div className="card">
            <div className="card__title">
              <h2 className="h2">
                <a className="poll-question toggle-show" href="#">
                  What is your favorite JavaScript library?{" "}
                  <i className="fa fa-line-chart font-icon font-icon--small"></i>
                </a>
              </h2>
            </div>
            <div className="card__footer">
              <div className="poll-stat clearfix">
                <span className="on-left">
                  <a href="#">
                    <i className="fa fa-user font-icon"></i>{" "}
                    <span className="poll-stat__author">John Doe</span>
                  </a>
                </span>
                <span className="on-right">
                  <a href="#">
                    <i className="fa fa-check-square-o font-icon"></i>{" "}
                    <span className="poll-stat__votes">51</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__title">
              <h2 className="h2">
                <a className="poll-question toggle-show" href="#">
                  What is your favorite JavaScript library?
                </a>
              </h2>
            </div>
            <div className="card__body"></div>
            <div className="card__footer">
              <div className="poll-stat clearfix">
                <span className="on-left">
                  <a href="#">
                    <span className="fontawesome-user font-icon"></span>{" "}
                    <span className="poll-stat__author">John Doe</span>
                  </a>
                </span>
                <span className="on-right">
                  <a href="#">
                    <span className="fontawesome-ok font-icon"></span>{" "}
                    <span className="poll-stat__votes">51</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__title">
              <h2 className="h2">
                <poll-question>
                  What is your favorite JavaScript library?
                </poll-question>
              </h2>
            </div>
            <div className="card__body">
              <form className="form" method="POST" action="/">
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                  />{" "}
                  React
                </label>
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                  />{" "}
                  Vue
                </label>
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                  />{" "}
                  jQuery
                </label>
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                  />{" "}
                  Other
                </label>
                <input className="form__submit" type="submit" value="Vote" />
                <button
                  className="form__submit form__submt--secondary"
                  type="button"
                >
                  <i className="fa fa-twitter font-icon"></i> <span>Tweet</span>
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card__title">
              <h2 className="h2">
                <poll-question>
                  What is your favorite JavaScript library?
                </poll-question>
              </h2>
            </div>
            <div className="card__body">
              <form className="form">
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                    disabled="disabled"
                  />{" "}
                  React
                </label>
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                    disabled="disabled"
                  />{" "}
                  Vue
                </label>
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                    disabled="disabled"
                  />{" "}
                  jQuery
                </label>
                <label className="form__label form__label--bordered">
                  <input
                    className="form__radio"
                    type="radio"
                    name="option"
                    value="react"
                    disabled="disabled"
                  />{" "}
                  Other
                </label>
              </form>
            </div>
            <div className="card__footer">
              <form className="form" method="POST" action="/">
                <div>
                  <span className="form__add-option">Add more options (+)</span>
                </div>
                <input
                  className="form__submit form__submit--disabled"
                  type="submit"
                  value="Save"
                  disabled="disabled"
                />
                <button
                  className="form__submit form__submit--secondary"
                  type="button"
                >
                  <i className="fa fa-trash-o font-icon"></i>{" "}
                  <span>Delete</span>
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card__title">
              <h2 className="h2">Login</h2>
            </div>
            <div className="card__body">
              <form className="form" method="GET" action="/">
                <label className="form__label">
                  Username
                  <input
                    className="form__input"
                    type="text"
                    required="required"
                  />
                </label>
                <label className="form__label">
                  Password
                  <input
                    className="form__input"
                    type="password"
                    required="required"
                  />
                </label>
                <input className="form__submit" type="submit" value="Login" />
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card__title">
              <h2 className="h2">Create new account</h2>
            </div>
            <div className="card__body">
              <form className="form" method="POST" action="/">
                <label className="form__label">
                  Username
                  <input
                    className="form__input"
                    type="text"
                    required="required"
                  />
                </label>
                <label className="form__label">
                  Password
                  <input
                    className="form__input"
                    type="password"
                    required="required"
                  />
                </label>
                <input className="form__submit" type="submit" value="Sign up" />
              </form>
            </div>
          </div>
          
          <div className="card">
            <div className="card__title">
              <h2 className="h2">Settings - Change password</h2>
            </div>
            <div className="card__body">
              <form className="form" method="GET" action="/">
                <label className="form__label">
                  Current password
                  <input
                    className="form__input"
                    type="text"
                    required="required"
                  />
                </label>
                <label className="form__label">
                  New password
                  <input
                    className="form__input"
                    type="text"
                    required="required"
                  />
                </label>
                <input className="form__submit" type="submit" value="Update" />
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card__title">
              <h2 className="h2">Not Found</h2>
            </div>
          </div>
        </div>
      </main>
      */}
      <Footer />
    </>
  );
};

export default App;
