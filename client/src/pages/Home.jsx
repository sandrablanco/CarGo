import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCars } from "../services/carService.js";
import { getWeather } from "../services/weatherService.js";
import { getPendingSurvey } from "../services/bookingService.js";
import ChatBot from "../components/ChatBot";
import "../styles/home.css";




function Home() {
  const [cars, setCars] = useState([]);
  const [weather, setWeather] = useState(null);
  const [pendingSurvey, setPendingSurvey] = useState()
  const [city, setCity] = useState("Madrid");
  const navigate = useNavigate();
  
  
   const handleLogout = async () => {
  try {
    await axios.post(
      "http://localhost:3000/api/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

    localStorage.removeItem("user");

    navigate("/login");

  } catch (error) {
    console.error(error);
  }
};


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

  useEffect(() => {
  getPendingSurvey()
    .then((data) => {
      console.log(data);
      setPendingSurvey(data);
    })
    .catch(console.error);
}, []);


  return (
   
    <>
    <header className="hero">
    <div className="logo-title">
    <img src="/logo.png" alt="CarGo" className="logo" width="180" height="180"/>
    <h2>Tu viaje empieza aqui. Servicio de calidad, kilómetros de confianza</h2>
    </div>
    </header>
    <div className="actions">

  <button onClick={() => navigate("/my-bookings")}>
    🚗 Mis reservas
  </button>

  <button onClick={handleLogout}>
    Cerrar sesión
  </button>

</div>

    <select value= {city} onChange={(e) => setCity(e.target.value)}>
      <option value="Madrid">Madrid</option>
      <option value="Bilbao">Bilbao</option>
      <option value="Barcelona">Barcelona</option>
      <option value="Valencia">Valencia</option>
      <option value="Cáceres">Cáceres</option>
      <option value="Vigo">Vigo</option>

    </select>
    {pendingSurvey && (
    <div>
    <h2>⭐ Tienes una valoración pendiente</h2>

    <p>
      {pendingSurvey.car.brand} {pendingSurvey.car.model}
    </p>
     
     <button
      onClick={() =>
      navigate("/review", {
      state: {
        bookingId: pendingSurvey._id,
        },
       })
      }>Responder encuesta</button>
   
    </div>
    )}
    {weather && (
      <div>
        <h3>Tiempo en 📍 {city}</h3>
        <p>🌡️ {weather.main.temp}</p>
        <p>💧 {weather.main.humidity}</p>
        <p>🌬️ {weather.wind.speed}</p>
        <p>{weather.weather[0].description}</p>
      </div>
    )}
    <ChatBot />
    <main className="cars-section">
     
     <h3>Coches disponibles</h3>

    <div className="cars-carousel">

     {/* <- */}
    <button
      className="carousel-button left"
      onClick={() => {
        document
          .querySelector(".cars-grid")
          .scrollBy({
            left: -350,
            behavior: "smooth",
          });
      }}
     >
      ‹
     </button>


    {/* Carrusel de coches */}
    <div className="cars-grid">

      {cars.map((car) => (

        <div className="car-card" key={car._id}>

          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
          />

          <div className="car-info">

            <h4>
              {car.brand} {car.model}
            </h4>

            <p>📅 Año: {car.year}</p>

            <p>⛽ {car.fuelType}</p>

            <p>{car.description}</p>

            <div className="car-bottom">

              <strong>
                {car.pricePerDay.toFixed(2)} €/día
              </strong>

              <button
                onClick={() =>
                  navigate(`/cars/${car._id}`)
                }
              >
                Reservar
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>


    {/* -> */}
    <button
      className="carousel-button right"
      onClick={() => {
        document
          .querySelector(".cars-grid")
          .scrollBy({
            left: 350,
            behavior: "smooth",
          });
      }}
    >
      ›
    </button>

  </div>

</main>
      
    </>
  )
}

export default Home

