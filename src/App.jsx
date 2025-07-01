import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact"; // ✅ Add this
import Waves from "./Waves";
import SeaWaves from "./SeaWaves"; // 👈 this
import Skills from "./Skills";

const App = () => {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Navbar />
      <Home />
      <Skills /> {/* 👈 Add this */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
