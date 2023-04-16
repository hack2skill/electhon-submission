import mongoose from "mongoose";
import validator from "validator";

const votingSchema = new mongoose.Schema({
  voterId: {
    type: String,
  },
  DOB:{
    type:String,
  },
  name: {
    type: String,
  },
  Address: {
    type: String,
  },
  TB_id: {
    type: String,
  },
  TB_address: {
    addr: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
});

const Vote = mongoose.model("Vote", votingSchema);

export default Vote;
