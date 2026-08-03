import express from "express";
import { createBooking, getBookingsByCar, getPendingSurvey, getMyBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post ("/", authMiddleware, createBooking);
router.get("/pending-survey", authMiddleware, getPendingSurvey);
router.get("/car/:id", getBookingsByCar);
router.get("/my-bookings", authMiddleware, getMyBookings);
/*router.put("/:id/confirm", authMiddleware, confirmBooking);
router.put("/:id/cancel", authMiddleware, cancelBooking);*/

export default router;