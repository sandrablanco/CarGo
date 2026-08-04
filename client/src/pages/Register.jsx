import { useState } from "react";
import { register } from "../services/authService";

function Register() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      lastName,
      secondLastName,
      email,
      password,
      city,
      province,
      postcode,
    };

    try {
        await register(newUser);
      alert("Usuario registrado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al registrar el usuario");
    }
  };

  return (
     <div>
      <h2>Crear cuenta</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Primer apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Segundo apellido"
          value={secondLastName}
          onChange={(e) => setSecondLastName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Provincia"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Código Postal"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          required
        />

        <button type="submit">Registrarse</button>
        
       </form>
    </div>
 );
}

export default Register;