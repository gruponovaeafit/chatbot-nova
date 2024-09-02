import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nova from "./views/Nova";
import Next from "./views/Next";
import Omegahack from "./views/Omegahack";
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Routes>
        <Route path="/" exact element={<Nova />} />
        <Route path="/next" element={<Next />} />
        <Route path="/omegahack" element={<Omegahack />} />
      </Routes>
    </div>
  );
}
