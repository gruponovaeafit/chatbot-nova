import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nova from "./views/Nova";
import Next from "./views/Next";
import Omegahack from "./views/Omegahack";
import Chatbot from "./views/Chatbot";
import "./App.css";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
      <Routes>
        <Route path="/" exact element={<Nova />} />
        <Route path="/next" element={<Next />} />
        <Route path="/omegahack" element={<Omegahack />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
  );
}
