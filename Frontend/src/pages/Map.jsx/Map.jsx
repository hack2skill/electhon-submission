import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import { Table } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "../../routes/router.config";

const Map = () => {
  const navigate = useNavigate();
  const [vid, setVid] = useState("");
  const [details, setDetails] = useState([]);
  const [send, setSend] = useState(false);
  const [dont, setDont] = useState(false);
  const [date, setDate] = useState("");
  const [num, setNum] = useState();
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "VoterId",
      dataIndex: "voterId",
      key: "voterId",
    },
    {
      title: "Date Of Birth",
      dataIndex: "DOB",
      key: "DOB",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Tool Booth Address",
      dataIndex: "TB_address",
      key: "TB_address",
    },
  ];

  const submit = async () => {
    if (vid.length === 0 || date.length === 0) {
      toast.error("All Fields are required !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      await axios
        .post(`http://localhost:8000/api/voting/getloc/${vid}`, {
          DOB: date,
        })
        .then((res) => {
          console.log(res.data.data.TB_address);
          localStorage.setItem("lat", res.data.data.TB_address.latitude);
          localStorage.setItem("long", res.data.data.TB_address.longitude);
          let newarray;
          setDetails(res.data.data);
          newarray = {
            TB_address: res.data.data.TB_address.addr,
            DOB: res.data.data.DOB,
            Address: res.data.data.Address,
            name: res.data.data.name,
            voterId: res.data.data.voterId,
          };
          let x = [];
          x.push(newarray);
          setDetails(x);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Please enter valid details !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    } catch (err) {
      toast.error("Please enter valid details !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setVid(e.target.value);
  };

  const submit1 = async () => {
    if (num === undefined) {
      toast.error("All Fields are required !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (num.length < 10) {
      toast.error("Phone Number cannot be less than 10 numbers !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    setLoading(true);
    setTimeout(async () => {
      await axios
        .post("http://localhost:8000/api/voting/sendsms", {
          pno: num,
        })
        .then((res) => {
          toast.success("Successfully sent message !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setNum("");
          setLoading(false);
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }, 1000);
  };

  const move = () => {
    if (vid.length === 0 || date.length === 0) {
      toast.error("Please Select Voter Id and Date of Birth !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    navigate(ROUTES.map);
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      {loading && <Loader />}
      <div className="flex flex-row items-center gap-[5rem] justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl mt-[2rem]">
            Please Enter your Voter Id Card Number.
          </p>
          <div className="flex gap-[1rem]">
            <input
              type="text"
              placeHolder="Voter ID"
              onChange={(e) => handleChange(e)}
              className="border-2 text-center flex rounded-xl h-[3rem] w-[18rem] mt-[2rem] border-black"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl mt-[2rem]">Please Enter your Date of Birth.</p>
          <div className="flex gap-[2rem]">
            <input
              type="Date"
              onChange={(e) => setDate(e.target.value)}
              className="border-2 rounded-xl h-[3rem] w-[13rem] mt-[2rem] border-black"
            />
            <button
              onClick={() => submit()}
              class="bg-blue-500 h-[3rem] mt-[1.8rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[2rem] items-center justify-center">
        <p className="text-3xl mt-[1rem]">
          Would you like to Recieve SMS on your Phone ?
        </p>
        <div class="flex flex-row mt-[1rem] gap-[1rem]">
          <div className="flex gap-[1rem] flex-row">
            <input
              type="checkbox"
              checked={send}
              onChange={() => {
                setSend(!send);
                setDont(send);
              }}
            />
            <p className="mt-[0.6rem]">YES</p>
            <input
              type="checkbox"
              checked={dont}
              onChange={() => {
                setDont(!dont);
                setSend(dont);
              }}
            />
            <p className="mt-[0.6rem]">NO</p>
          </div>
          <div>
            {send ? (
              <div className="flex flex-row gap-[2rem]">
                <input
                  type="Number"
                  value={num ? num : ""}
                  placeHolder="Phone Number"
                  onChange={(e) => setNum(e.target.value)}
                  className="border-2 flex text-center rounded-xl h-[3rem] w-[13rem] border-black"
                />
                <button
                  onClick={() => submit1()}
                  class="bg-blue-500 h-[3rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                >
                  Send
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-[2rem]">
        <Table columns={columns} dataSource={details} pagination={false} />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => move()}
          class="bg-blue-500 h-[3rem] hover:bg-blue-700 mt-[2rem] text-white font-bold py-2 px-4 rounded-xl"
        >
          View on Google Maps
        </button>
      </div>
    </div>
  );
};

export default Map;
