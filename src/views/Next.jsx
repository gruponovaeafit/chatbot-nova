import React, { useEffect } from "react";
import "../css/Next.css";
import "../css/LoadingScreen.css";
import Chat from "../components/Chat";
import Header from "../components/Header";
import { handleLoadingScreen } from "../utils/loadingScreen";
import logoNext from "../assets/images/logo_next.png";

export default function Next() {
  useEffect(() => {
    handleLoadingScreen({ pageName: "next" });
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className="container-fluid h-100 loading-screen-next" id="loading-screen">
        <div className="row h-100">
          <div className="d-flex align-items-center justify-content-center">
            <img src={logoNext} className="main-img" alt="Loading..." />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" id="next">
        <div className="card">
          <Header chatBotName={"NOVA NextBot"} />
          <Chat />
        </div>
      </div>
    </>
  );
}
