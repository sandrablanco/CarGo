import express from "express";
import { createBooking, getBookingsByCar } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post ("/", authMiddleware, createBooking);
export default router;

router.get("/car/:id", getBookingsByCar);