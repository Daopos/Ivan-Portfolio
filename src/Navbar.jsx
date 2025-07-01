import { useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>

        <div className="burger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {["home", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={() => setIsOpen(false)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
