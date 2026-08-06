import { Link, useNavigate } from "react-router-dom";
import { logout as logoutService } from "../services/authService";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Delete cookie from the server
      await logoutService();

      // Delete user data from browser
      localStorage.removeItem("user");

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav>
      <div>
        {!user ? (
          <>
            <span>¿Eres nuevo?</span>{" "}
            <Link to="/register">Regístrate</Link>

            {" | "}

            <span>Si ya eres usuario </span>
            <Link to="/login">Iniciar sesión</Link>
          </>
        ) : (
          <>
            <span>👋 Hola, {user.name}</span>

            {" | "}

            <Link to="/">🏠 Inicio</Link>

            {" | "}

            <Link to="/my-bookings">🚗 Mis reservas</Link>

            {" | "}

            <button onClick={logout}>
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
