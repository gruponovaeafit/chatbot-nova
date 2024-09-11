import React, { useEffect } from "react";
import "../css/Next.css";
import "../css/LoadingScreen.css";
import Chat from "../components/Chat";
import Header from "../components/Header";
import { handleLoadingScreen } from "../utils/loadingScreen";
import logoNext from "../assets/images/logo_next.png";

/**
 * Renders the Next component.
 *
 * @returns {JSX.Element} The rendered Next component.
 */
export default function Next() {
  useEffect(() => {
    handleLoadingScreen({ pageName: "next" });
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className="w-full flex items-center justify-center loading-screen-next"
        id="loading-screen"
      >
        <div className="w-1/2 flex justify-center">
          <img src={logoNext} className="main-img" alt="Loading..." />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col bg-chatbot" id="next">
        <Header chatBotName={"NOVA NextBot"} />
        <Chat />
      </div>
    </>
  );
}
