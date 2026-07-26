import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <span>¿Eres nuevo?</span>{" "}
        <Link to="/register">Regístrate</Link>

        {" | "}
        <span>Si ya eres usuario </span>
        <Link to="/login">Iniciar sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar;