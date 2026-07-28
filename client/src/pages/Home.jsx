import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { getCars } from "../services/carService.js";
import { getWeather } from "../services/weatherService.js";


function Home() {
  const [cars, setCars] = useState([]);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Madrid");
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

  useEffect(() => {
    getWeather(city)
    .then((data) => {
      setWeather(data);
    })
    .catch((error) => {console.error(error);
  });
  }, [city]);

  return (
    <>
    <header className="hero">
    <div className="logo-title">
    <img src="/logo.png" alt="CarGo" className="logo" width="180" height="180"/>
    <h2>Tu viaje empieza aqui. Servicio de calidad, kilómetros de confianza</h2>
    </div>
    </header>
    {weather && (
      <div>
        <h3>Tiempo en Madrid</h3>
        <p>
          Temperatura {weather.main.temp}
        </p>
        <p>Humedad {weather.main.humidity}</p>
      </div>
    )}
    <main>
       <h3>Coches disponibles</h3>
       
       {cars.map((car) => (
         <div key={car._id}>
           <h4>{car.brand} {car.model}</h4>
           <p>Año: {car.year}</p>
           <p>Tipo de combustible: {car.fuelType}</p>
           <p>Precio: {car.pricePerDay.toFixed(2)} €</p>
           <p>{car.description}</p>
           <img src={car.image} alt={`${car.brand} ${car.model}`} width="250" />
           <br />
           <br />
           <button onClick={() => navigate(`/cars/${car._id}`)}>Reservar</button>
                     
           <hr />
           <br />
           <br />
         </div>
       ))}
    </main>
    </>
  )
}

export default Home

