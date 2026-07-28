
 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCars } from "../services/carService.js";

function Home() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCars()
      .then((cars) => {
        setCars(cars);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <header className="hero">
    <div className="logo-title">
    <img src="/logo.png" alt="CarGo" className="logo" width="100" height="100"/>
    <h2>Tu viaje empieza aqui. Servicio de calidad, kilómetros de confianza</h2>
    </div>
    </header>
    <main>
    <div>
       <h3>Coches disponibles</h3>
       {cars.map((car) => (
         <div key={car._id}>
           <h4>{car.brand} {car.model}</h4>
           <p>Año: {car.year}</p>
           <p>Tipo de combustible: {car.fuelType}</p>
           <p>Precio: {car.pricePerDay.toFixed(2)} €</p>
           <button onClick={() => navigate(`/cars/${car._id}`)}>Reservar</button>
           <img src={car.image} alt={`${car.brand} ${car.model}`} width="200" />
           <p>{car.description}</p>
           <hr />
         </div>
       ))}
    </div>
    </main>
    </>
  )
}

export default Home;
