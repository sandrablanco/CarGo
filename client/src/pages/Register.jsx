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
      const response = await register(newUser);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* inputs */}
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Register;