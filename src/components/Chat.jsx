import "../css/Chat.css";
import logoPacho from "../assets/images/pacho.png";
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
    let currentTime = getCurrentTime();
    const userMessage = { user: true, message: userInput, time: currentTime };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    currentTime = getCurrentTime();
    const response = await ChatService.question(userInput);
    const botMessage = {
      user: false,
      message: response.answer,
      time: currentTime,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="px-2 lg:px-0 h-[79dvh] overflow-y-scroll flex flex-column">
        <div className="w-full lg:w-1/2 m-[0.5rem] lg:m-0 text-[0.8rem] lg:text-[1rem] flex flex-column mx-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.user ? "justify-end" : "justify-start"} py-2`}
            >
              {message.user ? (
                <>
                  <div className="flex flex-col items-end">
                    <div className="text-white p-2 me-2 rounded-lg chat-container-user">
                      {message.message}
                    </div>
                    <div className="text-xs px-2 text-gray-400 mt-1">
                      {message.time}
                    </div>
                  </div>
                  <img src={userIcon} className="rounded-full icon-user" />
                </>
              ) : (
                <>
                  <img src={logoPacho} className="rounded-full icon-bot me-2" />
                  <div className="flex flex-col items-start">
                    <div className="text-dark p-2 rounded-lg chat-container-bot">
                      {message.message}
                    </div>
                    <div className="text-xs px-2 text-gray-400 mt-1">
                      {message.time}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="w-full flex justify-center h-[9dvh] mb-2 lg:mb-0 fixed bottom-0">
        <div className="w-full lg:w-1/2 m-[0.5rem] lg:m-0 text-[0.8rem] lg:text-[1rem]">
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
