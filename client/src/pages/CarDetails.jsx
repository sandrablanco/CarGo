import { useState } from React;
import { createBooking } from "../services/bookingService";

const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
<h3>Reservar coche</h3>

<label>Fecha inicio</label>
<input
  type="date"
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
/>

<label>Fecha fin</label>
<input
  type="date"
  value={endDate}
  onChange={(e) => setEndDate(e.target.value)}
/>

<button onClick={handleBooking}>
  Reservar
</button>

const handleBooking = async () => {

    const booking = {
        car: car._id,
        startDate,
        endDate,
    };

    await createBooking(booking);

    alert("Reserva realizada");
};