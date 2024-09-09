import "../css/Nova.css";
import "../css/LoadingScreen.css";
import Chat from "../components/Chat";
import Header from "../components/Header";
import { handleLoadingScreen } from "../utils/loadingScreen";
import { useEffect } from "react";
import logoNova from "../assets/images/logo_nova.png";

export default function Nova() {
  useEffect(() => {
    handleLoadingScreen({ pageName: "nova" });
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className="w-full h-screen flex items-center justify-center loading-screen-nova"
        id="loading-screen"
      >
        <div className="w-1/2 flex justify-center">
          <img src={logoNova} className="main-img" alt="Loading..." />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full min-h-screen flex flex-col bg-chatbot" id="nova">
        <Header chatBotName={"NOVA ChatBot"} />
        <Chat />
      </div>
    </>
  );
}
