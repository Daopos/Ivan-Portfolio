// Contact.jsx
import "./Contact.css";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

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
      className="contact-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleMailTo} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Email</button>
      </form>
    </motion.div>
  );
};

export default Contact;
