import bigPromise from "../middlewares/bigPromise.js";
import Vote from "../models/Votingschema.js";
import Twilio from "twilio";
import bcrypt from "bcryptjs";

const accountSid = "AC4cf9b8c7e354fab48049c43d481e1abe";
const authToken = "c93f048f06b795930f813675ca1104cd";
const client = Twilio(accountSid, authToken);

export const sendsms = bigPromise(async (req, res, next) => {
  const { pno } = req.body;
  client.messages
    .create({
      body: "Don't forget to vote! Remember, every vote counts. Exercise your right to vote and make your voice heard. #YaadSeVoteKarna",
      from: "+14345108292",
      to: `+91${pno}`,
    })
    .then((message) => {
      console.log(message.sid);
      return res.status(201).json({
        sucess: true,
        message: "Successfully Sent message",
      });
    });
});

export const getLocation = bigPromise(async (req, res, next) => {
  const { id } = req.params;
  let dob = req.body.DOB;
  console.log(id, dob);
  await Vote.findOne({ voterId: id })
    .where("DOB")
    .equals(dob)
    .then((data) => {
      return res.status(201).json({
        success: true,
        message: "Successfully sent details",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: "Error",
      });
    });
});

export const addVoter = bigPromise(async (req, res, next) => {
  let date1 = new Date(req.body.DOB);
  date1 = date1.toISOString().slice(0, 10);
  console.log(date1);
  let { voterId, name, TB_id, Address, TB_address } = req.body;
  let x = await Vote.create({
    voterId: voterId,
    DOB: date1,
    name: name,
    TB_id: TB_id,
    Address: Address,
    TB_address: TB_address,
  });
  if (x) {
    return res.status(201).json({
      success: true,
      message: "Successfully Added  Voter",
      data: x,
    });
  } else {
    return res.status(501).json({
      success: false,
      message: "Error in adding",
    });
  }
});
