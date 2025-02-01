'use client';

import { useState, useEffect, useRef } from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about_us");
  const [prevTab, setPrevTab] = useState("about_us");
  const [direction, setDirection] = useState("none");
  const tabContentRef = useRef(null);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      // Track the previous tab and determine sliding direction
      const tabOrder = ["about_us", "our_work"];
      const currentIndex = tabOrder.indexOf(activeTab);
      const nextIndex = tabOrder.indexOf(tab);

      setDirection(nextIndex > currentIndex ? "right" : "left");
      setPrevTab(activeTab);
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    if (tabContentRef.current) {
      const content = tabContentRef.current;
      const tabOrder = ["about_us", "our_work"];
      const currentIndex = tabOrder.indexOf(activeTab);
      const prevIndex = tabOrder.indexOf(prevTab);

      // Set the initial position based on the direction
      if (direction === "right") {
        content.style.transform = "translateX(-25%)";
      } else if (direction === "left") {
        content.style.transform = "translateX(25%)";
      }

      // Trigger the slide animation
      requestAnimationFrame(() => {
        content.style.transition = "transform 0.3s ease-in-out";
        content.style.transform = "translateX(0)";
      });

      // Reset transition after the animation
      const handleTransitionEnd = () => {
        content.style.transition = "none";
        content.removeEventListener("transitionend", handleTransitionEnd);
      };

      content.addEventListener("transitionend", handleTransitionEnd);
    }
  }, [activeTab, direction]);

  return (
    <div className={styles.tabsContainer}>
      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        <div
          className={`${styles.tab} ${activeTab === "about_us" ? styles.active : ""}`}
          onClick={() => handleTabClick("about_us")}
        >
          About Us
          {activeTab === "about_us" && <div className={styles.underline}></div>}
        </div>
        <div
          className={`${styles.tab} ${activeTab === "our_work" ? styles.active : ""}`}
          onClick={() => handleTabClick("our_work")}
        >
          Our Work
          {activeTab === "our_work" && <div className={styles.underline}></div>}
        </div>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContentContainer}>
        <div ref={tabContentRef} className={styles.tabContent}>
          {activeTab === "about_us" && <About />}
          {activeTab === "our_work" && <Services />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
