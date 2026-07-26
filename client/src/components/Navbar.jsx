import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
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