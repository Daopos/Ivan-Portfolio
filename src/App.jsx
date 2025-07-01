import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

const App = () => {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
