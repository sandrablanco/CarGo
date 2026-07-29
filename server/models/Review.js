import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  comment: {
    type: String,
  },
});

export default mongoose.model("Review", reviewSchema);