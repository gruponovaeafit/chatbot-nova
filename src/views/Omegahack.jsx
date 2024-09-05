import React, { useEffect } from "react";
import "../css/Omegahack.css";
import "../css/LoadingScreen.css";
import Chat from "../components/Chat";
import Header from "../components/Header";
import logoOmegahack from "../assets/images/logo_omegahack_blanco.png";
import { handleLoadingScreen } from "../utils/loadingScreen";

export default function Omegahack() {
  useEffect(() => {
    handleLoadingScreen({ pageName: "omegahack" });
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className="container-fluid h-100 loading-screen-omegahack"
        id="loading-screen"
      >
        <div className="row h-100">
          <div className="d-flex align-items-center justify-content-center">
            <img src={logoOmegahack} className="main-img" alt="Loading..." />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" id="omegahack">
        <div className="card">
          <Header chatBotName={"NOVA OmegaBot"} />
          <Chat />
        </div>
      </div>
    </>
  );
}
