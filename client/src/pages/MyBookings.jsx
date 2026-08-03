import { useEffect, useState } from "react";
import { getMyBookings } from "../services/bookingService";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings()
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>

      <h1>🚗 Mis reservas</h1>

      {bookings.length === 0 ? (

        <p>No tienes reservas todavía.</p>

      ) : (

        bookings.map((booking) => (

          <div key={booking._id}>

            <h2>
              {booking.car.brand} {booking.car.model}
            </h2>

            <img
              src={booking.car.image}
              alt={booking.car.model}
              width="250"
            />

            <p>
              📅 Inicio:
              {" "}
              {new Date(booking.startDate).toLocaleDateString("es-ES")}
            </p>

            <p>
              📅 Fin:
              {" "}
              {new Date(booking.endDate).toLocaleDateString("es-ES")}
            </p>

            <p>
              💶 Total:
              {" "}
              {booking.totalPrice.toFixed(2)} €
            </p>

            <p>
              Estado:
              {" "}
              {booking.status === "pending" && "🟡 Pendiente"}

              {booking.status === "confirmed" && "🟢 Confirmada"}

              {booking.status === "cancelled" && "🔴 Cancelada"}

            </p>

            <hr />

          </div>

        ))

   )}

 </div>

);
}

export default MyBookings;