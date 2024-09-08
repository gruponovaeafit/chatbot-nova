import React from "react";
import "../css/Chatbot.css";
import logoPacho from "../assets/pacho.svg";
import userIcon from "../assets/user.svg";
import sendIcon from "../assets/send-icon.svg";

function Chatbot() {
  return (
    <div className="w-full bg-chatbot">
      <div className="flex justify-center bg-header-next h-16">
        <div id="header">
          <img src={logoPacho} alt="logo" className="w-20" />
          <div className="block">
            <p className="text-2xl/6 text-black font-bold leading-9">
              NOVA NextBot{" "}
              <span className="text-white text-sm block font-normal">
                En linea
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2" id="chat-container">
        <div className="w-1/2" id="chat">
          <div className="flex justify-end py-2">
            <div className="text-white p-2 me-2 chat-container-user">
              Hola, ¿En qué puedo ayudarte?
            </div>
            <img src={userIcon} className="rounded-circle icon-user" />
          </div>
          <div className="flex justify-start content-end py-2">
            <img src={logoPacho} className="rounded-circle icon-bot me-2" />
            <div className="text-dark p-2 chat-container-bot">
              El grupo estudiantil NOVA es el 13avo grupo del 5to piso en el
              bloque 29. Se centra en tecnología e innovación, buscando fomentar
              un entorno para abordar problemas cotidianos de manera creativa.
              NOVA está compuesto por 4 departamentos: RRPP, Mercadeo, Gestión
              Humana y Comunidades. Fue creado el 19 de octubre de 2022 con el
              propósito de ofrecer soluciones innovadoras.
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 w-full flex justify-center">
        <div className="w-1/2" id="chat-input">
          <form>
            <div className="flex">
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Escribe un mensaje..."
              />
              <button
                type="submit"
                className="ml-2 mt-1 inline-flex items-center justify-center px-4 py-2 rounded-md border border-transparent shadow-sm text-sm font-medium text-header-next hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <img src={sendIcon} alt="send" className="w-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
