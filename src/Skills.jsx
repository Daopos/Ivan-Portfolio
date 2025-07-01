import { useState } from "react";
import "./Skills.css";
import Photos from "./Photos"; // Make sure your icons are in Photos.js

const skillData = {
  skills: [
    { name: "React.js", icon: Photos.reactIcon },
    { name: "Laravel", icon: Photos.laravelIcon },
    { name: "Node.js", icon: Photos.flutterIcon },
    { name: "Express.js", icon: Photos.jsIcon },
    { name: "C#", icon: Photos.phpIcon },
    { name: "Java", icon: Photos.phpIcon },
    { name: "PHP", icon: Photos.phpIcon },
    { name: "Flutter", icon: Photos.phpIcon },
  ],
  tools: [
    { name: "Git", icon: Photos.gitIcon },
    { name: "Github", icon: Photos.gitIcon },
    { name: "VS Code", icon: Photos.vscodeIcon },
    { name: "Postman", icon: Photos.postmanIcon },
    { name: "MySQL", icon: Photos.mysqlIcon },
    { name: "MongoDB", icon: Photos.mysqlIcon },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="skills-section">
      <h2>My Toolkit</h2>

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

      <div className="skills-grid">
        {skillData[activeTab].map((item, index) => (
          <div key={index} className="skill-box">
            <img src={item.icon} alt={item.name} className="skill-icon" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
