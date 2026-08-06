import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";



dotenv.config();

connectDB(); 

const app = express();

app.use(cors());


app.use(express.json());
app.use("/api/cars", carRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/chat", chatRoutes);


app.get("/", (req, res) => {
  res.send("CarGo API IS RUNNING 🚗");
});

const PORT = process.env.PORT || 3000;  


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

export default app;