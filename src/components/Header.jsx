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
    <div className="flex items-center justify-center h-[10dvh] header-bg">
      <div className="flex justify-start w-full lg:w-1/2">
        <img src={logoPacho} alt="logo" className="w-12 lg:w-16 h-12 lg:h-16" />
        <p className="text-xl font-bold bot-name mb-0">
          {chatBotName}
          <span className="block text-sm online">En línea</span>
        </p>
      </div>
    </div>
  );
}
