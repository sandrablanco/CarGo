import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import bookingRoutes from "./routes/bookingRoutes.js"

dotenv.config();

connectDB(); 

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);



app.get("/", (req, res) => {
  res.send("CarGo API IS RUNNING 🚗");
});

const PORT = process.env.PORT || 3000;  


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

export default app;