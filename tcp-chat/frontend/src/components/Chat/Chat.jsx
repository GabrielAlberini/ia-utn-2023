import { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/messages")
      .then((response) => {
        setMessages(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching messages: ", error);
      });
  }, []);

  return (
    <div className="chat-container">
      <h1 className="chat-header">Historial Chat TCP</h1>
      <div>
        {messages &&
          messages.map((message) => (
            <div key={message.id} className="chat-message">
              <p className="chat-username">{message.user}:</p>
              <p className="chat-user-message">{message.message}</p>
              <p className="chat-date">Date: {message.date}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Chat };
