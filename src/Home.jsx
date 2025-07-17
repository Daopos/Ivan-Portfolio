import "./Home.css";
import me from "./assets/me.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="mainWrapper"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.div
        className="imageWrapper"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        }}
      >
        <div className="meDot"></div>
        <motion.img
          src={me}
          alt="Me"
          className="meImage"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="helloText"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Typewriter
            words={["ONGOING PORTFOLIO"]}
            loop={false}
            cursor
            cursorStyle="|"
            cursorColor="white"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={4000}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="introText"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <p>
          Hi, I am <strong className="blinkingText">Ivan Adrian Muñoz</strong>.
          A passionate fresh graduate, eager to grow into a skilled software
          engineer, developer, or programmer. Dedicated to continuous learning,
          problem-solving, and building meaningful digital solutions. Excited to
          contribute to real-world projects, collaborate with experienced teams,
          and grow in a fast-paced, innovative environment.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Home;
