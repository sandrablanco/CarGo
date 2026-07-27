import { useParams } from "react-router-dom";

function Booking() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const handleBooking = async (e) => {
    e.preventDefault();

    const booking = {
      car: id,
      startDate,
      endDate,
    };

    try {
      await createBooking(booking);
      alert("Reserva realizada correctamente");
    } catch (error) {
      console.error(error);
      alert("Ha ocurrido un error al realizar la reserva");
    }
  };

    const { id } = useParams();

    console.log(id);

    return (
        <div>
        <h1>Reserva del coche {id}</h1>
        <form onSubmit={handleBooking}>

      <div>
        <label>Fecha de inicio</label>
        <br />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label>Fecha de finalización</label>
        <br />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>

      <br />

      <button type="submit">
        Confirmar reserva
      </button>

    </form>
  </div>
);
     
}

export default Booking;