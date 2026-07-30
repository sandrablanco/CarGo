import express from "express";
import {createBooking, getBookingsByCar, getPendingSurvey} from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/car/:id", getBookingsByCar);
router.get("/pending-survey", authMiddleware, getPendingSurvey);

export default router;