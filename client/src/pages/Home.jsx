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
    <header>
        <h1>🚗CarGo🚗</h1>
      <p>Tu viaje empieza aqui. Servicio de calidad, kilómetros de confianza</p>
        
    </header>
    <main>
    <div>
       <h2>Coches disponibles</h2>
       {cars.map((car) => (
         <div key={car._id}>
           <h3>{car.brand} {car.model}</h3>
           <p>Año: {car.year}</p>
           <p>Tipo de combustible: {car.fuelType}</p>
           <p>Precio: {car.pricePerDay.toFixed(2)} €</p>
           <button onClick={() => navigate(`/cars/${car._id}`)}>
             Ver detalles
           </button>
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