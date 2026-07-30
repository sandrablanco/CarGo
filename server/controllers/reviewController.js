import Review from "../models/Review.js";
import Booking from "../models/Booking.js";

export const createReview = async (req, res) => {
  try {
    const review = new Review({
      user: req.user.id,
      booking: req.body.booking,
      rating: req.body.rating,
      comment: req.body.comment,
      improvement: req.body.improvement,
      recommend: req.body.recommend,
    });

    await review.save();

    await Booking.findByIdAndUpdate(req.body.booking, {
      surveyCompleted: true,
    });

    res.status(201).json({
      message: "Valoración enviada correctamente",
      review,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};