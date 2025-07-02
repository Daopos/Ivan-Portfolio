import "./Contact.css";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import Photos from "./Photos";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const handleMailTo = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    window.location.href = `mailto:ivannegranzamunoz@email.com?subject=Message from ${name}&body=${encodeURIComponent(
      message + "\n\nFrom: " + email
    )}`;
  };

  return (
    <motion.div
      ref={ref}
      className="contact-wrapper"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-section">
        <div className="contact-info">
          <h3>Let's Work Together</h3>
          <p>
            I’m open to freelance opportunities or full-time roles. Feel free to
            reach out if you want to collaborate on a project or just say hi!
          </p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/ivan-adrian-munoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Photos.linkedinIcon}
                alt="LinkedIn"
                className="social-icon"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/Daopos?tab=overview&from=2025-06-01&to=2025-06-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Photos.GithubIcon}
                alt="GitHub"
                className="social-icon"
              />
              GIthub
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleMailTo} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
