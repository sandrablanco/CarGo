import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },

  comment: {
    type: String,
  },

  
  bookingExperience: {
    type: String,
  },

  
  suggestion: {
    type: String,
  },

  
  recommend: {
    type: String,
  },
},
{ timestamps: true });


export default mongoose.model("Review", reviewSchema);