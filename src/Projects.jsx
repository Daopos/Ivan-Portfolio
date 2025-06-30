import "./Projects.css";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import reactIcon from "./assets/react.png";
import laravelIcon from "./assets/laravel.png";
import mysqlIcon from "./assets/mysql.png";
import flutterIcon from "./assets/flutter.png";
import apiIcon from "./assets/api.png";

const projects = [
  {
    title: "School Management Information System",
    image: "./assets/logo.png",
    description: "A school management system wit 7 user level.",
    tech: [
      { name: "React.js", icon: reactIcon },
      { name: "Laravel", icon: laravelIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "Hostinger", icon: laravelIcon },
    ],
  },
  {
    title: "RFID Monitoring System",
    image: "/images/ecommerce.png",
    description: "Mobile and web RFID tracking with Flutter and Laravel.",
    tech: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Laravel", icon: laravelIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "Hostinger", icon: laravelIcon },
    ],
  },
  {
    title: "Bakery Inventory System",
    image: "/images/blog.png",
    description: "Inventory and Sales tracking for a bakery using Laravel.",
    tech: [
      { name: "Laravel", icon: laravelIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
  {
    title: "AI-powered Study App",
    image: "/images/blog.png",
    description: "Smart learning app built in Flutter with AI APIs.",
    tech: [
      { name: "Flutter", icon: flutterIcon },
      { name: "API", icon: apiIcon },
    ],
  },
  {
    title: "Shoe E-commerce",
    image: "/images/blog.png",
    description: "A PHP-based online shoe store.",
    tech: [
      { name: "PHP", icon: laravelIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const duplicated = [...projects, ...projects]; // for loop illusion

  const cardWidth = 320; // including gap
  const totalWidth = cardWidth * duplicated.length;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        const currentX = x.get();
        let nextX = currentX - 1;

        // Reset back to 0 halfway to fake infinite loop
        if (Math.abs(nextX) >= totalWidth / 2) {
          nextX = 0;
        }

        x.set(nextX);
      }, 10); // scroll speed

      return () => clearInterval(interval);
    }
  }, [isHovered, x, totalWidth]);

  return (
    <motion.div
      ref={ref}
      className="projects-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <h2>My Projects</h2>
      <div
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        <motion.div
          className="carousel-track"
          style={{ x }}
          drag="x"
          dragElastic={0.05}
          dragConstraints={{ left: -totalWidth / 2, right: 0 }}
        >
          {duplicated.map((proj, i) => (
            <motion.div
              key={i}
              className="project-card"
              whileTap={{ scale: 0.97 }}
            >
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-icons">
                {proj.tech.map((t, index) => (
                  <div key={index} className="tech-icon-item">
                    <img
                      src={t.icon}
                      alt={t.name}
                      title={t.name}
                      className="tech-icon-img"
                    />
                    <span className="tech-label">{t.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
