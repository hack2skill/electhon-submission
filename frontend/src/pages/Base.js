import React from "react";
import Landing from "./Landing";
import CandidateInfo from "./CandidateInfo";
import EVM from "./EVM";
import EVM2 from "./EVM2";
import EVM3 from "./EVM3";
import EVM4 from "./EVM4";
import EVM5 from "./EVM5";
import EVM6 from "./EVM6";
import Report from "./Report";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import OTPPage from "./otp";
import Election from "./election";
import Campaign from "./campaign";
import Success from "../components/campaign/success";
import AdminLog from "./adminlog";
import Dashboard from "../components/admin/dashboard";
import InstitutionList from "../components/admin/list";
import TimeSlot from "../components/slot/slot";
import Poster from "./Poster";
import Referral from "./Referral";
import DigitalVoterSlip from "./GenerateVoterSlip";

const Base = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="candidateinfo" element={<CandidateInfo />} />
        <Route path="/simulation" element={<EVM />} />
        <Route path="/output1" element={<EVM2 />} />
        <Route path="/output2" element={<EVM3 />} />
        <Route path="/output3" element={<EVM4 />} />
        <Route path="/output4" element={<EVM5 />} />
        <Route path="/output5" element={<EVM6 />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/election" element={<Election />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<InstitutionList />} />
        <Route path="/timeslot" element={<TimeSlot />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/digitalslip" element={<DigitalVoterSlip />} />
        <Route path="/admin/login" element={<AdminLog />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Base;
