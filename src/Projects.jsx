import "./Projects.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Photos from "./Photos";
import Modal from "./Modal";

const projects = [
  {
    title: "School Management Information System",
    images: [Photos.School1, Photos.GateMonitory1], // ✅ fixed property name
    description: "A school management system with 7 user levels.",
    tech: [
      { name: "React.js", icon: Photos.reactIcon },
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
      { name: "Hostinger", icon: Photos.laravelIcon },
    ],
  },
  {
    title: "RFID Monitoring System",
    images: [Photos.GateMonitory1], // ✅ fixed property name
    description: "Mobile and web RFID tracking with Flutter and Laravel.",
    tech: [
      { name: "Flutter", icon: Photos.flutterIcon },
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
      { name: "Hostinger", icon: Photos.laravelIcon },
    ],
  },
  {
    title: "Bakery Inventory System",
    images: [Photos.Bakery1], // ✅ fixed property name

    description: "Inventory and Sales tracking for a bakery using Laravel.",
    tech: [
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
    ],
  },
  {
    title: "AI-powered Study App",
    images: [Photos.AiStudy1], // ✅ fixed property name

    description: "Smart learning app built in Flutter with AI APIs.",
    tech: [
      { name: "Flutter", icon: Photos.flutterIcon },
      { name: "API", icon: Photos.apiIcon },
    ],
  },
  {
    title: "Shoe E-commerce",
    images: [Photos.Shoe1], // ✅ fixed property name
    description: "A PHP-based online shoe store.",
    tech: [
      { name: "PHP", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
    ],
  },
];

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [dragging, setDragging] = useState(false); // track drag

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

      <div className="carousel-wrapper">
        <motion.div
          className="carousel-track"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => {
            // short delay to allow drag to complete before resetting
            setTimeout(() => setDragging(false), 100);
          }}
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
