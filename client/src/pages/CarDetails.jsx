import { useEffect } from "react";
import { useState } from React;
import { createBooking } from "../services/bookingService";
import { useParams } from "react-router-dom";

function CarDetails() {

const { id } = useParams();
const [car, setCar] = useState(null);
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
useEffect(() => {
    getCarById(id)
      .then((data) => {
        setCar(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const booking = {
        car: car._id,
        startDate,
        endDate,
      };

      await createBooking(booking);

      alert("Reserva realizada correctamente");

    } catch (error) {
      console.error(error);
      alert("Error al realizar la reserva");
    }
  };

  if (!car) {
    return <h2>Cargando coche...</h2>;
  }

  return (
    <div>

      <h1>{car.brand} {car.model}</h1>

      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        width="300"
      />

      <p>{car.description}</p>

      <p>Año: {car.year}</p>

      <p>Combustible: {car.fuelType}</p>

      <p>Precio por día: {car.pricePerDay.toFixed(2)} €</p>

      <h2>Reservar coche</h2>

      <form onSubmit={handleBooking}>

        <label>Fecha de inicio</label>
        <br />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <br /><br />

        <label>Fecha de fin</label>
        <br />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Confirmar reserva</button>

      </form>

    </div>
  );
}

export default CarDetails;
