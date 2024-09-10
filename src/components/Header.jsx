import React from "react";
import "../css/Header.css";
import logoPacho from "../assets/images/pacho.png";

/**
 * Renders the header component for the chatbot.
 *
 * @param {Object} props - The component props.
 * @param {string} props.chatBotName - The name of the chatbot.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header({ chatBotName }) {
  return (
    <div className="flex justify-center h-16 header-bg">
      <div className="flex items-center header-container">
        <img src={logoPacho} alt="logo" className="w-16" />
        <div className="ml-4">
          <p className="text-2xl font-bold bot-name">
            {chatBotName}
            <span className="block text-sm online">En línea</span>
          </p>
        </div>
      </div>
    </div>
  );
}
