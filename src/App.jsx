// WaveMorphScroll.jsx

import Home from "./Home";
import Navbar from "./Navbar";
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
      </div>
    </div>
  );
};

export default App;
