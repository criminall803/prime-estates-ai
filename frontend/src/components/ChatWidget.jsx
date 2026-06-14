import { useState, useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

function ChatWidget({
  openChat,
  setOpenChat,
  propertyPrompt
}) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! Looking to buy a property today?"
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  const sendMessage = async (customMessage = null) => {

    const currentMessage =
      customMessage || message;

    if (!currentMessage.trim()) return;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: currentMessage
      }
    ]);

    if (!customMessage) {
      setMessage("");
    }

    try {

      const response = await fetch(
        "https://prime-estates-ai.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: currentMessage
          })
        }
      );

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: data.reply
        }
      ]);

    } catch {

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: "Welcome to Prime Estates! How can I assist you today?"
        }
      ]);

    }
  };

  useEffect(() => {

    if (propertyPrompt) {

      sendMessage(propertyPrompt);

    }

  }, [propertyPrompt]);

  return (
    <>
      {!openChat && (
        <button
          className="chat-bubble"
          onClick={() => setOpenChat(true)}
        >
          <BsStars size={30} />
        </button>
      )}

      {openChat && (
        <div className="chat-widget">

          <div className="chat-header">
            <span>Prime Estates AI Assistant</span>

            <button
              className="close-btn"
              onClick={() => setOpenChat(false)}
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-message"
                    : "ai-message"
                }
              >
                {msg.text}
              </div>
            ))}

            <div ref={messagesEndRef}></div>

          </div>

          <div className="chat-input">

            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Ask about properties..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              className="send-btn"
              onClick={() => sendMessage()}
            >
              <IoSend size={36} />
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default ChatWidget;