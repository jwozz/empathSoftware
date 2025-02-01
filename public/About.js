import React, { useEffect } from "react";
import styles from "./All.module.css";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [isImageLoading, setImageLoading] = React.useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.title}><h2>Making business <br /> <span>effortless</span> & <span>scalable</span></h2></div>
        <div className={styles.section}>
            <p>We are a technology company with a deep understanding of human needs, 
              committed to developing intelligent and adaptable solutions. 
              Our innovations evolve alongside user demands, enabling businesses 
              and individuals to thrive in an ever-changing digital landscape.</p>
        
          <h3>What <br /> <span>drives</span> us?</h3>
          <p>Our journey is driven by ambitious vision, relentless determination, and a 
            steadfast commitment to unlock new opportunities, simplify complexities, 
              and create lasting value for those we serve.</p>

          <div className={styles.contactDetails}>
          <h4>Contact us</h4>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <span>+254 792 973211</span>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <span>message@empathsoftware.com</span>
            </div>
          </div>
        </div>
        <div className={styles.endSection}>
          {/* WhatsApp Chat Widget */}
          <div className={styles.whatsappChat}>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
            </a>
          </div>
          {/* Elfsight Widget */}
          <div
            className="elfsight-app-3ea9461a-bff2-4198-ba24-bea79500a5c7"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;
