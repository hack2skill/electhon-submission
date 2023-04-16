import React,{useContext,useState} from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/Context";

const OnboardingUser = () => {
  const {registerVoter,verifyOtpUser,enableOtp} = useContext(DataContext);
  
  const [otp,setOtp]= useState(0);
  const [formData,setFormData]=useState({
    aadharId:"",
    phone:"",
    voterId:""
    
  });
  const onclickRegister=()=>{
    registerVoter(formData.aadharId,formData.phone,formData.voterId);
    
  }
  const onChangeData=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setFormData({...formData,[name]:value});
  }
  return (
    <>
      <div className="relative min-h-screen bg-blue-100 backdrop-blur flex justify-center items-center bg-texture bg-cover py-28 sm:py-0">
        <div className="p-4 sm:p-8 flex-1 ">
          <div className="max-w-[420px] min-w-[320px] bg-white rounded-b-3xl mx-auto">
            <div className="relative h-auto">
              <svg
                className="absolute -top-20 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  fill-opacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="px-10 pt-4 pb-8 rounded-3xl shadow-xl">
              <div className="mx-auto text-center">
                <h1 className="text-3xl text-gray-800 font-bold">
                  Democracy-Chain
                </h1>
                <p className="mt-4 font-bold">
                  Hello , <span className="text-blue-500">Voter</span>
                </p>
              </div>
              <div className="flex items-center justify-around mt-6">
                <div className="w-[100%] h-14 text-center px-2  rounded-full cursor-pointer bg-blue-500 text-white saturate-200 transition-all hover:bg-blue-600">
                  <NavLink to="/onboarding-ec" className="block mt-4">
                    Register as Election Commision Member
                  </NavLink>
                </div>
              </div>
              <div className="flex items-center my-6">
                <hr className="flex-1" />
                <span className="px-4 text-sm text-gray-400">
                  Or countinue with
                </span>
                <hr className="flex-1" />
              </div>
              <form action="" method="POST">
                <div className="relative">
                  <input
                    id="aadharId"
                    name="aadharId"
                    onChange={(e) => onChangeData(e)}
                    type="text"
                    value={formData.aadharId}
                    className="p-3 w-full  px-5 border-0 placeholder:text-gray-400 border-b-2 border-black focus:ring-0 focus:border-purple-600"
                    placeholder="Aaadhar Card Number"
                  />
                </div>
                <div className="relative mt-10">
                  <input
                    id="voterId"
                    name="voterId"
                    onChange={(e) => onChangeData(e)}
                    type="text"
                    value={formData.voterId}
                    className="p-3 w-full  px-5 border-0 placeholder:text-gray-400 border-b-2 border-black focus:ring-0 focus:border-purple-600"
                    placeholder="Voter ID Number"
                  />
                </div>
                <div className="mt-10 relative">
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => onChangeData(e)}
                    className="peer p-3 w-full px-5 border-0 border-b-2 placeholder:text-gray-400  border-black focus:ring-0 focus:border-purple-600"
                    placeholder="Phone Number"
                  />
                </div>
                {enableOtp && <div className="mt-10 relative flex justify-center">
                  <input
                    id="otp"
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="p-3 w-full px-2 border-0 border-b-2 placeholder:text-gray-400  border-black "
                    placeholder="Enter Otp"
                  />
                  <button
                  type="button"
                  onClick={()=>verifyOtpUser(formData.aadharId,formData.phone,formData.voterId,otp)}
                  className="w-full mt-10 mx-2 py-2 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none"
                >
                  Verify 
                </button>
                </div>}
                <button
                  type="button"
                  onClick={onclickRegister}
                  className="w-full mt-10 py-4 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none"
                >
                  Sign up
                </button>
                <p className="text-center text-sm text-gray-400 mt-4">
                  Don't Have Aaadhar Card ?{" "}
                  <a
                    href="#"
                    className="font-semibold text-purple-600 hover:underline"
                  >
                    Let's Check
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingUser;
