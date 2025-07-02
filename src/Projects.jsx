import "./Projects.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Photos from "./Photos";
import Modal from "./Modal";

const projects = [
  {
    title: "School Management Information System",
    images: [Photos.School1, Photos.GateMonitory1], // ✅ fixed property name
    description:
      "A comprehensive platform for managing both administrative and academic school operations. Features include user management, enrollment, grading, learning modules, login security, test creation, email notifications, report generation, and support for seven user roles: admin, registrar, finance, principal, teacher, student, and parent.",
    tech: [
      { name: "React.js", icon: Photos.reactIcon },
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
      { name: "Hostinger", icon: Photos.HostingerIcon },
    ],
  },
  {
    title: "RFID Monitoring System",
    images: [Photos.GateMonitory1], // ✅ fixed property name
    description:
      "A monitoring system for village security with mobile and web access. Features include RFID-based photo capture, gate entry tracking, notifications, report generation, and user account management.",
    tech: [
      { name: "Flutter", icon: Photos.flutterIcon },
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
      { name: "Hostinger", icon: Photos.HostingerIcon },
    ],
  },
  {
    title: "Bakery Inventory System",
    images: [Photos.Bakery1], // ✅ fixed property name

    description:
      "A system designed to manage bakery operations including stock tracking, product management, and employee monitoring. Includes features for sales tracking, report generation, and overall inventory control.",
    tech: [
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
    ],
  },
  {
    title: "AI-powered Study App",
    images: [Photos.AiStudy1], // ✅ fixed property name

    description:
      "A mobile learning app with AI-powered features built using Flutter. Integrated with Gemini AI to enable chatbot-based learning, automated flashcard creation, and AI-generated quizzes.",
    tech: [
      { name: "Flutter", icon: Photos.flutterIcon },
      { name: "API", icon: Photos.apiIcon },
    ],
  },
  {
    title: "Shoe E-commerce",
    images: [Photos.Shoe1], // ✅ fixed property name
    description:
      "An e-commerce platform for selling shoes with features like guest checkout, order management, and sales tracking. Includes product catalog management, stock monitoring, and basic admin controls.",
    tech: [
      { name: "PHP", icon: Photos.phpIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
    ],
  },
];

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(0);

  const carouselRef = useRef();
  const trackRef = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current && trackRef.current) {
        const wrapperWidth = carouselRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setWidth(trackWidth - wrapperWidth);
      }
    };

    updateWidth(); // Initial call

    window.addEventListener("resize", updateWidth); // Watch for screen resize
    return () => window.removeEventListener("resize", updateWidth); // Clean up
  }, []);

  const openModal = (images) => {
    if (!dragging) {
      setSelectedImages(images);
    }
  };

  const closeModal = () => {
    setSelectedImages(null);
  };

  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>

      <div className="carousel-wrapper" ref={carouselRef}>
        <motion.div
          className="carousel-track"
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setTimeout(() => setDragging(false), 100)}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(proj.images)}
            >
              <div className="project-image">
                <img
                  src={proj.images?.[0]}
                  alt={proj.title}
                  className="project-image-single"
                />
              </div>
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

      {selectedImages && <Modal images={selectedImages} onClose={closeModal} />}
    </motion.div>
  );
};

export default Projects;
