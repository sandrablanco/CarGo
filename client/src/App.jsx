import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import CarDetails from "./pages/CarDetails";
import Review from "./pages/Review";
import "./App.css";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/review" element={<Review/>} />
     </Routes>

    </Router>
  );
}

export default App;