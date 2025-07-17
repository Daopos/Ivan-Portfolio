import "./Projects.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Photos from "./Photos";
import Modal from "./Modal";
import projects from "./ProjectsData";

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
        const maxDrag = trackWidth - wrapperWidth;

        setWidth(maxDrag > 0 ? maxDrag + 100 : 0); // add 100px buffer for smoother drag
      }
    };

    // Wait a bit for images to load before calculating width
    const timeout = setTimeout(updateWidth, 300);

    window.addEventListener("resize", updateWidth);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateWidth);
    };
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
                  src={proj.images?.[0]?.src}
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
