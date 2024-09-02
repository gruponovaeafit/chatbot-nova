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
  } , []);
  return (
    <>
      <div className="container-fluid h-100 loading-screen-nova" id="loading-screen">
        <div className="row h-100">
          <div className="d-flex align-items-center justify-content-center">
            <img src={logoNova} className="main-img" />
          </div>
        </div>
      </div>
      <div className="container" id="nova">
        <div className="card">
          <Header chatBotName={"NOVA ChatBot"} />
          <Chat />
        </div>
      </div>
    </>
  );
}
