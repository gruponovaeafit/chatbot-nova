import React from "react";
import "../css/Header.css";
import logoPacho from "../assets/pacho.svg";

export default function Header({ chatBotName }) {
  return (
    <div className="chat-header d-flex align-items-center">
      <img
        src={logoPacho}
        className="rounded-circle me-2 logo-pacho"
      />
      <div className="d-flex flex-column">
        <h5 className="mb-0">{chatBotName}</h5>
        <span className="online">En línea</span>
      </div>
    </div>
  );
}
