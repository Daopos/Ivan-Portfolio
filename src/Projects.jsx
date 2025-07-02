import "./Projects.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Photos from "./Photos";
import Modal from "./Modal";

const projects = [
  {
    title: "School Management Information System",
    images: [{ src: Photos.School1, caption: "School dashboard" }],
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
    images: [{ src: Photos.GateMonitory1, caption: "RFID tracking interface" }],
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
    title: "Folder Locker & Encryptor",
    images: [
      {
        src: Photos.Folder2,
        caption: "View menu",
      },
      {
        src: Photos.Folder1,
        caption: "Login",
      },
      {
        src: Photos.Folder3,
        caption: "Encrpt and Compress the files on folder",
      },
      {
        src: Photos.Folder4,
        caption: "Lock the folder using access control",
      },
      {
        src: Photos.Folder5,
        caption: "Unlock The folder",
      },
      {
        src: Photos.Folder6,
        caption: "Recover the folder",
      },
      {
        src: Photos.Folder8,
        caption: "Change login info",
      },
    ],
    description:
      "A secure Windows app that compresses, encrypts, and locks folders with password protection, NTFS-based access control, and a recovery mechanism.",
    tech: [
      { name: "C#", icon: Photos.csharpIcon },
      { name: "WindowsForm", icon: Photos.csharpIcon },
    ],
  },
  {
    title: "PDF Sorter for Scanned Documents",
    images: [
      { src: Photos.PDF1, caption: "PDF interleaving UI" },
      { src: Photos.PDF2, caption: "Reordering tool preview" },
    ],
    description:
      "A tool that helps users fix and reorder scanned PDF files using interleaving logic, real-time preview, and export of corrected documents.",
    tech: [
      { name: "C#", icon: Photos.csharpIcon },
      { name: "WindowsForm", icon: Photos.csharpIcon },
    ],
  },
  {
    title: "Bakery Inventory System",
    images: [{ src: Photos.Bakery1, caption: "Stock and sales tracker" }],
    description:
      "A system designed to manage bakery operations including stock tracking, product management, and employee monitoring. Includes features for sales tracking, report generation, and overall inventory control.",
    tech: [
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
    ],
  },
  {
    title: "AI-powered Study App",
    images: [
      { src: Photos.AiStudy1, caption: "AI chatbot integration" },
      { src: Photos.AiStudy2, caption: "Flashcard creation" },
      { src: Photos.AiStudy3, caption: "AI-generated quizzes" },
      { src: Photos.AiStudy4, caption: "Mobile learning UI" },
    ],
    description:
      "A mobile learning app with AI-powered features built using Flutter. Integrated with Gemini AI to enable chatbot-based learning, automated flashcard creation, and AI-generated quizzes.",
    tech: [
      { name: "Flutter", icon: Photos.flutterIcon },
      { name: "API", icon: Photos.apiIcon },
    ],
  },
  {
    title: "Shoe E-commerce",
    images: [{ src: Photos.Shoe1, caption: "Product display page" }],
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
