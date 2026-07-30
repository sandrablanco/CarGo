import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import authMiddleware from "../middleware/authMiddleware.js";

export const createBooking = async (req, res) => {
    try {
        const { car, startDate, endDate } = req.body;
        // search car
       const selectedCar = await Car.findById(car);
       if (!selectedCar) {
        return res.status (404).json({message: "No se encuentra coche"})
       }
       if (new Date(endDate) <= new Date(startDate)) {
        return res.status(400).json({message: "La fecha de fialización debe ser posterior a la fecha de inicio",});
       }
       //check existing Booking
       const existingBooking = await Booking.findOne({
        car,
        $or: [
         {
           startDate: { $lte: endDate },
           endDate: { $gte: startDate }
          }
         ]
        });
        if (existingBooking) {
           return res.status(400).json({
             message: "Este coche ya está reservado para esas fechas."
            });
        }
       // days of booking
       const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
       // total price
       const totalPrice = days * selectedCar.pricePerDay;
       //create booking
       const booking = new Booking({
          user: req.user.id,
          car,
          startDate,
          endDate,
          totalPrice,
        });

        await booking.save();

        const today = new Date();

         if (
            today >= new Date(startDate) &&
            today <= new Date(endDate)
          )             

        res.status(201).json({
            message: "Reserva creada correctamente",
            booking,
        });
 
        } catch (error) {
         res.status(500).json({
          message: error.message,
         });
        }
        };

export const getBookingsByCar = async (req, res) => {
  try {
    const bookings = await Booking.find({
      car: req.params.id,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getPendingSurvey = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      user: req.user.id,
      endDate: { $lt: new Date() },
      surveyCompleted: false,
    }).populate("car");

    res.json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};