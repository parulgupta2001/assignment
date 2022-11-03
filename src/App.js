import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Signup } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
