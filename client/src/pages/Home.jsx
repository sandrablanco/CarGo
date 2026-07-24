import { useEffect, useState } from "react";
import { getCars } from "../services/carService.js";

function Home() {
  const [cars, setCars] = useState([]);

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
    <div>
       <h2>Coches disponibles</h2>
       {cars.map((car) => (
         <div key={car._id}>
           <h3>{car.brand} {car.model}</h3>
           <p>Año: {car.year}</p>
           <p>Tipo de combustible: {car.fuelType}</p>
           <p>Precio: {car.pricePerDay.toFixed(2)} €</p>
           <img src={car.image} alt={`${car.brand} ${car.model}`} width="200" />
           <p>{car.description}</p>
           <hr />
         </div>
       ))}
    </div>
  )
}

export default Home;