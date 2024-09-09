import "../css/Chat.css";
import logoPacho from "../assets/pacho.svg";
import userIcon from "../assets/user.svg";
import sendIcon from "../assets/send-icon.svg";
import ChatService from "../services/chat";

import React, { useState, useEffect, useRef } from "react";

/**
 * Chat component for displaying and sending messages.
 *
 * @returns {JSX.Element} The rendered Chat component.
 */
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
      <div className="px-4" id="chat-container">
        <div className="w-1/2 mx-auto" id="chat">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex justify-${message.user ? "end" : "start"} py-2`}
            >
              {message.user ? (
                <>
                  <div className="text-white p-2 me-2 rounded-lg chat-container-user">
                    {message.message}
                  </div>
                  <img src={userIcon} className="rounded-full icon-user" />
                </>
              ) : (
                <>
                  <img src={logoPacho} className="rounded-full icon-bot me-2" />
                  <div className="text-dark p-2 rounded-lg chat-container-bot">
                    {message.message}
                  </div>
                </>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="w-full flex justify-center p-2 fixed bottom-0">
        <div className="w-1/2 mx-auto" id="chat-input">
          <form onSubmit={handleSendMessage}>
            <div className="flex">
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Escribe un mensaje..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-white text-white rounded-md hover:bg-gray-100"
              >
                <img src={sendIcon} alt="send" className="w-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
