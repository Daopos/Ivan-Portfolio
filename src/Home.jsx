import "./Home.css";
import me from "./assets/me.png";

const Home = () => {
  return (
    <div className="mainWrapper">
      <div className="imageWrapper">
        <div className="meDot"></div>
        <img src={me} alt="Me" className="meImage" />
        <div className="helloText">HELLO WORLD!</div>
      </div>
      <div className="introText">
        <p>
          Hi, I am <strong className="blinkingText">Ivan Adrian Muñoz</strong>.
          A passionate fresh graduate, eager to grow into a skilled software
          engineer, developer, or programmer. Dedicated to continuous learning,
          problem-solving, and building meaningful digital solutions. Excited to
          contribute to real-world projects, collaborate with experienced teams,
          and grow in a fast-paced, innovative environment.
        </p>
      </div>
    </div>
  );
};

export default Home;
