import express from "express";
import { createBooking, getBookingsByCar, getPendingSurvey } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post ("/", authMiddleware, createBooking);
router.get("/pending-survey", authMiddleware, getPendingSurvey);
router.get("/car/:id", getBookingsByCar);
router.put("/:id/confirm", authMiddleware, confirmBooking);
router.put("/:id/cancel", authMiddleware, cancelBooking);

export default router;