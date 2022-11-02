import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { MainContent } from "./components/mainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
