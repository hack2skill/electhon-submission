import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "../context/Context";

const Leader = () => {
  const [time, setTime] = useState("");

 


    var countDownDate = new Date("Apr 16, 2023 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      let t = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      setTime(t);
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        t = "EXPIRED";
        setTime(t);
      }
    }, 1000);


  const { newusers } = useContext(DataContext);
  return (
    <>
      (
      <div className="container my-12 mx-auto px-4 md:px-12 py-10 border border-black rounded-md shadow-lg text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Leader Board 
          </span>{" "}
          Democracy Chain 
        </h1>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12 py-10 border border-black rounded-md shadow-lg text-center">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {time}
          </span>{" "}
          
        </h1>
      </div>
      <div className="container-leader">
        <div className="topLeadersList">
          {newusers.map((leader, index) => (
            <div className="leader" key={leader.id}>
              {index + 1 <= 3 && (
                <div className="containerImage">
                  <img
                    className="image"
                    loading="lazy"
                    src={`https://cdn-icons-png.flaticon.com/512/186/18600${index}.png`}
                  />
                  <div className="crown">
                    <svg
                      id="crown1"
                      fill="#0f74b5"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 50"
                    >
                      <polygon
                        className="cls-1"
                        points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                      />
                    </svg>
                  </div>
                  <div className="leaderName">{leader.name}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="playerslist p-5">
          <div className="table">
            <div>Sno</div>

            <div className="mx-5">Name</div>

            <div>Coupons</div>
            <div>Refers</div>
            <div>Points</div>
          </div>
          <div className="list">
            {newusers.map((leader, index) => (
              <div className="player" key={leader.id}>
                <span> {index + 1}</span>
                <div className="user">
                  <img
                    className="image mx-5"
                    src={`https://cdn-icons-png.flaticon.com/512/186/1860${
                      index > 10 ? index : `0${index}`
                    }.png`}
                  />
                  <span className="mx-5"> {leader.name} </span>
                </div>

                <span> {leader.coupons} </span>
                <span> {leader.refers} </span>
                <span> {leader.points} </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Leader;
