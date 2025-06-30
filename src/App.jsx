// WaveMorphScroll.jsx

import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Waves from "./Waves";

const App = () => {
  return (
    <div style={{ height: "3000px" }}>
      <Navbar />
      <div
        style={{
          padding: "9rem 4rem 4rem 4rem",
          color: "white",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Home />
        <Projects /> {/* Show projects section */}
      </div>
      {/* <Waves /> */}
    </div>
  );
};

export default App;
