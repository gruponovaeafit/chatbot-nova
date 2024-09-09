import React from "react";
import "../css/Header.css";
import logoPacho from "../assets/pacho.svg";

export default function Header({ chatBotName }) {
  return (
    <div className="flex justify-center h-16 header-bg">
      <div className="flex items-center header-container">
        <img src={logoPacho} alt="logo" className="w-20" />
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
