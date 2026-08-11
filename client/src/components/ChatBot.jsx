import { useState } from "react";
import { sendMessage } from "../services/chatService";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      {
        sender: "user",
        text: message,
      },
    ];

    setMessages(newMessages);

    try {
      const reply = await sendMessage(message);

      setMessages([
        ...newMessages,
        {
          sender: "bot",
          text: reply,
        },
      ]);

      setMessage("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chatbot">

      <div className="chat-header">
        🤖 Asistente CarGo
      </div>

      <div className="chat-messages">

        {messages.map((msg, index) => (
          <p key={index}>
            <strong>
              {msg.sender === "user" ? "Tú" : "CarGo"}:
            </strong>{" "}
            {msg.text}
          </p>
        ))}

      </div>

      <div className="chat-input">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe una pregunta..."
        />

        <button onClick={handleSend}>
          Enviar
        </button>

      </div>

    </div>
  );
}

export default ChatBot;