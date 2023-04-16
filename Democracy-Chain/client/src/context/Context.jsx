import React, { createContext, useState, useEffect } from "react";
export const DataContext = createContext();
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import { abi } from "../contracts/constant";
import { contractAddress } from "../contracts/constant";
import { ethers } from "ethers";
import { voterData } from "../utils/dummy_data/voter";
import { useNavigate } from "react-router-dom";
import { dados } from "../utils/dummy_data/users";
const DataContextProvider = ({ children }) => {
  const [newusers, setNewusers] = useState(
    dados.sort((p1, p2) =>
      p1.points < p2.points ? 1 : p1.points > p2.points ? -1 : 0
    )
  );
  const navigate = useNavigate();
  const [formModal, setFormModal] = useState(false);
  const [problemForm, setProblemForm] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const { address, isConnecting, isDisconnected } = useAccount();
  const [enableOtp, setEnableOtp] = useState(false);
  const { ethereum } = window;
  const getEtheriumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const ctx = new ethers.Contract(contractAddress, abi, signer);
    return ctx;
  };

  const getElectionCommissionHead = async () => {
    // if(authUser){
    const contract = getEtheriumContract();
    let tx = await contract.election_commission();
    return tx;
    // }
  };

  const getElectionPolls = async () => {
    try {
      let contract = getEtheriumContract();
      let data = await contract.getPolls();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if(!address){
      setAuthUser(false);
    }
  },[])
  const listOfContestents = async (id, account) => {
    try {
      let contract = getEtheriumContract();
      let contestants = await contract.listContestants(id, { from: account });
      console.log(contestants);
      return contestants;
    } catch (error) {
      console.log(error);
    }
  };

  const casteVote = async (id, cid, account) => {
    try {
      let contract = getEtheriumContract();
      let tx = await contract.vote(id, cid, { from: account });
      let flag=false;
      let filterArray = newusers.map((item, i) => {
        
        if (item.addr.toLowerCase() == account.toString().toLowerCase()) {
          flag=true;
          return { ...item, points: item.points + 50 };
        }
        return item;
      });
      if(flag){
        toast.success("Congratulations!!! You Got 50 Points Bonus on Voted");
          setTimeout(()=>{
            toast.success("Congratulations!!! You Unlock the Voucher Coupon",{
              theme: "dark"
            });
          },1500)
      }
      let sortedUsers = filterArray.sort((p1, p2) =>
        p1.points < p2.points ? 1 : p1.points > p2.points ? -1 : 0
      );

      setNewusers(sortedUsers);
    } catch (error) {
      console.log(error);
      toast.error("You Already Voted");
      return ;

    }
  };

  const deletePoll = async (id, account) => {
    try {
      let contract = getEtheriumContract();
      let tx = await contract.deletePoll(id, { from: account });
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };
  const registerVoter = (aadharNumber, phoneNumber, voterId) => {
    var regexp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    var voterIdRegex = /^[A-Z]{3}[0-9]{7}$/;
    if (!voterIdRegex.test(voterId)) {
      toast.error("Voter ID is not valid");
      return;
    }
    // if (!regexp.test(aadharNumber)) {
    //   toast.error("Aadhar is not valid");
    //   return;
    // }
    if (
      !aadharNumber ||
      !phoneNumber ||
      !phoneNumber.lenght == 10 ||
      !aadharNumber.length == 12 ||
      !voterId
    ) {
      toast.error("Please Enter Details");
      return;
    } else {
      toast.success("OTP Sent Successfully");
      setEnableOtp(true);
      let data = voterData.filter(
        (item, i) =>
          item.aadhar === aadharNumber &&
          item.mobile === phoneNumber &&
          item.voterID === voterId
      );
      if (data.length === 1) {
        toast.success("Please Verify Otp");
      }
    }
  };

  const verifyOtpUser = (aadharNumber, phoneNumber, voterId, otp) => {
    if (!otp) {
      toast.error("Please Enter Otp");
      return;
    }

    let data = voterData.filter(
      (item, i) =>
        item.aadharNumber == aadharNumber &&
        item.mobileNumber == phoneNumber &&
        item.voterID == voterId
    );
    console.log(data);
    if (data.length == 1 && data[0].otp === otp) {
      toast.success("Verified Successfully !!!");
      navigate("/election-polls");
      setAuthUser(true);
      return;
    } else {
      toast.error("Not Verified!!!");
    }
  };
  const registerECMmeber = (epicID, phoneNumber, role) => {
    console.log("Register", epicID, phoneNumber, role);
    toast.success("Election Member Verified Verified , Go Ahead");
  };

  return (
    <DataContext.Provider
      value={{
        setFormModal,
        verifyOtpUser,
        formModal,
        address,
        problemForm,
        setProblemForm,
        authUser,
        registerVoter,
        registerECMmeber,
        enableOtp,
        getElectionCommissionHead,
        getElectionPolls,
        casteVote,
        deletePoll,
        listOfContestents,
        newusers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
