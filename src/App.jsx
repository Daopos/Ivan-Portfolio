// WaveMorphScroll.jsx

import Navbar from "./Navbar";
import Waves from "./Waves";

const App = () => {
  return (
    <div style={{ height: "3000px" }}>
      <Navbar />
      <div
        style={{
          padding: "4rem",
          color: "white",
          position: "relative",
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default App;
