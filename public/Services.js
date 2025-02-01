import React from "react";
import Image from "next/image";
import styles from "./All.module.css";

const Services = () => {
    const [isImageLoading, setImageLoading] = React.useState(true)
  return (
    <div className={styles.page}>
        <section id="services" className={styles.section}>
            <h2>Our Services</h2>
            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <Image
                      src="/g.jpeg" 
                      alt="Software Development"
                      width="200" 
                      height="200"
                      objectFit="cover" 
                      onLoad={() => setImageLoading(false)}
                      className={`${styles.imageContainer} ${
                        isImageLoading ? styles.blur : styles.removeBlur
                      }`}
                    />
                    <h3>Software Development</h3>
                    <p>Build robust software solutions tailored to your business needs.</p>
                </div>
                <div className={styles.serviceCard}>
                    <Image
                      src="/h.jpg"  
                      alt="Software Development"
                      width="200" 
                      height="200"
                      objectFit="cover"        
                      onLoad={() => setImageLoading(false)}
                      className={`${styles.imageContainer} ${
                        isImageLoading ? styles.blur : styles.removeBlur
                      }`}
                    />
                    <h3>Web Development</h3>
                    <p>Create stunning, responsive websites that drive engagement and growth.</p>
                </div>
                <div className={styles.serviceCard}>
                    <Image
                      src="/g.jpeg"  
                      alt="Software Development"
                      width="200"  
                      height="200" 
                      objectFit="cover"
                      onLoad={() => setImageLoading(false)}
                      className={`${styles.imageContainer} ${
                        isImageLoading ? styles.blur : styles.removeBlur
                      }`}
                    />
                    <h3>Mobile Development</h3>
                    <p>Design and develop seamless mobile applications for iOS and Android.</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Services;
