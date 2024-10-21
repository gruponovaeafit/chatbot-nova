import React, { useEffect } from "react";
import "../css/Omegahack.css";
import "../css/LoadingScreen.css";
import Chat from "../components/Chat";
import Header from "../components/Header";
import logoOmegahack from "../assets/images/logo_omegahack_blanco.png";
import { handleLoadingScreen } from "../utils/loadingScreen";

/**
 * Renders the Omegahack component.
 *
 * @returns {JSX.Element} The rendered Omegahack component.
 */
export default function Omegahack() {
  useEffect(() => {
    handleLoadingScreen({ pageName: "omegahack" });
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className="w-full h-screen flex items-center justify-center loading-screen-omegahack"
        id="loading-screen"
      >
        <div className="w-1/2 flex justify-center">
          <img src={logoOmegahack} className="main-img" alt="Loading..." />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="w-full min-h-screen flex flex-col bg-chatbot"
        id="omegahack"
      >
        <Header chatBotName={"NOVA OmegaBot"} />
        <Chat />
      </div>
    </>
  );
}
