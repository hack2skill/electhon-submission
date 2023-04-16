import express from "express";
import { addVoter, getLocation, sendsms } from "../controllers/votingController.js";
const router = express.Router();

router.route("/sendsms").post(sendsms);
router.route("/getloc/:id").post(getLocation);
router.route("/addVoter").post(addVoter);
export default router;
