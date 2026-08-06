import axios from "axios";

export const askAI = async (message) => {

  try {
    console.log("API KEY:", process.env.OPENROUTER_API_KEY);
    const response = await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {

            model: "nvidia/nemotron-3-ultra-550b-a55b:free",

            messages: [

                {
                    role: "system",
                    content:
                    `
                    Eres el asistente virtual oficial de CarGo, una empresa de alquiler de coches.

                     SOLO puedes responder preguntas relacionadas con CarGo, como:

                    - Alquiler de coches
                    - Reservas
                    - Pagos
                    - Vehículos disponibles
                    - Seguros
                    - Facturas
                    - Política de cancelación
                    - Funcionamiento de la plataforma
                    Si el usuario pregunta cualquier cosa que NO esté relacionada con CarGo (deportes, política, cocina, programación, medicina,      videojuegos, etc.), NO respondas a la pregunta.

                   En su lugar responde EXACTAMENTE:

                   "Lo siento, solo puedo ayudar con dudas relacionadas con CarGo y nuestros servicios de alquiler de vehículos."

                   No inventes información sobre CarGo.
                   Sé breve y amable.
                    `
                },

                {
                    role: "user",
                    content: message
                }

            ]

        },

        {

            headers: {

                Authorization:
                `Bearer ${process.env.OPENROUTER_API_KEY}`,

                "Content-Type": "application/json"

            }

        }

    );

    return response.data.choices[0].message.content;

} catch (error) {

    console.log("ERROR OPENROUTER:");
    console.log(error.response?.data || error.message);

    throw error;

  }

};
