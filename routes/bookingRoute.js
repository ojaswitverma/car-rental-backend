import express from "express";
import { confirmBooking } from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/confirm", confirmBooking)

export default bookingRouter;