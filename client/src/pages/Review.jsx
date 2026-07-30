import { useState } from "react";
import { createReview } from "../services/reviewService";

function Review() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [recommend, setRecommend] = useState("");
  const [bookingExperience, setBookingExperience] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createReview({
      rating,
      comment,
      bookingExperience,
      suggestion,
      recommend
    });

    alert("¡Gracias por valorar tu experiencia!");
  } catch (error) {
    console.error(error);
    alert("No se pudo enviar la valoración");
  }
};

  return (
    <div>
      <h1>⭐ Valora tu experiencia</h1>

      <form onSubmit={handleSubmit}>

        <label>Puntuación</label>
        <br />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>

        <br /><br />

        <label>Comentario</label>
        <br />

        <textarea
          rows="5"
          cols="40"
          placeholder="¿Qué te ha parecido el coche?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <textarea
          rows="5"
          cols="40"
          placeholder="¿Cómo fue su experiencia durante el proceso de reserva?"
          value={bookingExperience}
          onChange={(e) => setBookingExperience(e.target.value)}
        />
        
        <textarea
          rows="5"
          cols="40"
          placeholder="¿Desea sugerirnos alguna mejora?"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
        />

         <textarea
          rows="5"
          cols="40"
          placeholder="¿Nos recomendaría a algún amigo o familiar?"
          value={recommend}
          onChange={(e) => setRecommend(e.target.value)}
        />
        <br /><br />

        <button type="submit">
          Enviar valoración 
        </button>

      </form>
    </div>
  );
}

export default Review;