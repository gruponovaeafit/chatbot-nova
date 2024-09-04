import logoPacho from "../assets/pacho.svg";
import userIcon from "../assets/user.svg";
import "../css/Chat.css";
import ChatService from "../services/chat";

import React, { useState, useEffect, useRef } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setUserInput("");
    const userMessage = { user: true, message: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const response = await ChatService.question(userInput);
    const botMessage = { user: false, message: response.answer };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="card-body d-flex flex-column">
        <div className="overflow-auto flex-grow-1">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`d-flex align-items-start justify-content-${message.user ? "end" : "start"} mb-2`}
            >
              {message.user ? (
                <>
                  <div className="text-white p-2 me-2 chat-container-user">
                    {message.message}
                  </div>
                  <img src={userIcon} className="rounded-circle icon-user" />
                </>
              ) : (
                <>
                  <img src={logoPacho} className="rounded-circle icon-bot me-2" />
                  <div className="text-dark p-2 chat-container-bot">
                    {message.message}
                  </div>
                </>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="card-footer">
        <form onSubmit={handleSendMessage}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe un mensaje"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="btn" type="submit">
              <i className="fa-regular fa-paper-plane send-btn"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

