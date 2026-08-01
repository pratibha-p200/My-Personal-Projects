import { useState } from "react";
import "./index.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="container">
      <h1>Chat UI</h1>

      <div className="chat-box">
        {messages.length === 0 ? (
          <p className="empty">No messages yet...</p>
        ) : (
          messages.map((msg) => (
            <div className="message" key={msg.id}>
              {msg.text}
            </div>
          ))
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;