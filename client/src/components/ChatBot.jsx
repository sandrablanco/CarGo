import { useState } from "react";
import { sendMessage } from "../services/chatService";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add the user's message to the chat
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
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "320px",
        background: "white",
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>🤖 Asistente CarGo</h3>

      <div
        style={{
            height: "150px",
            overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>
                {msg.sender === "user" ? "Tú" : "CarGo"}:
            </strong>{" "}
            {msg.text}
          </p>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe una pregunta..."
      />

      <button onClick={handleSend}>
        Enviar
      </button>
    </div>
  );
}

export default ChatBot;
