import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.css";
import Photos from "./Photos";

const skillData = {
  skills: [
    { name: "React.js", icon: Photos.reactIcon },
    { name: "Node.js", icon: Photos.nodejsIcon },
    { name: "Express.js", icon: Photos.expressIcon },
    { name: "Laravel", icon: Photos.laravelIcon },
    { name: "C#", icon: Photos.csharpIcon },
    { name: "Java", icon: Photos.javaIcon },
    { name: "PHP", icon: Photos.phpIcon },
    { name: "Flutter", icon: Photos.flutterIcon },
  ],
  tools: [
    { name: "Git", icon: Photos.GitIcon },
    { name: "Github", icon: Photos.GithubIcon },
    { name: "VS Code", icon: Photos.vscodeIcon },
    { name: "Postman", icon: Photos.postmanIcon },
    { name: "MySQL", icon: Photos.mysqlIcon },
    { name: "MongoDB", icon: Photos.mongodbIcon },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <motion.div
      className="skills-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>My Toolkit</h2>

      <div className="tab-buttons">
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={activeTab === "tools" ? "active" : ""}
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} /* triggers exit / enter */
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
        >
          {skillData[activeTab].map(({ name, icon }) => (
            <motion.div
              key={name}
              className="skill-box"
              variants={itemVariants}
            >
              <img src={icon} alt={name} className="skill-icon" />
              <span>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Skills;
