import styles from "../styles/HeroSection.module.css";
import b1 from "../assets/images/background-2.jpg";
import b2 from "../assets/images/background-1.jpg";
import b3 from "../assets/images/background-3.jpg";
import b4 from "../assets/images/background-6.jpg";
import b5 from "../assets/images/background-5.jpg";

import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [currentBackground, setCurrentBackground] = useState(b1);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentBackground === b1) setCurrentBackground(b2);
      else if (currentBackground === b2) setCurrentBackground(b3);
      else if (currentBackground === b3) setCurrentBackground(b4);
      else if (currentBackground === b4) setCurrentBackground(b5);
      else setCurrentBackground(b1);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentBackground]);

  return (
    <>
      <main className={styles.main}>
        <div data-aos="fade-right" className={styles.box1}>
          <h1 className={styles.header1}>
            <span>
              <span className={styles.design}>Alags</span> Bikes
            </span>
          </h1>
          <p className={styles.introText}>Feel the Thrill. Own the Road.</p>
          <p className={styles.intro2}>
            Experience the exhilarating power of two wheels. We offer a premium
            selection of motorcycles for every rider, from weekend warriors to
            seasoned adventurers.
          </p>{" "}
          <p className={styles.intro3}>
            <span className={styles.design}>Sign up</span> to start purchasing
            our bikes.Beyond the engine, it's a lifestyle. Dive into the vibrant
            community of passionate bikers and find your tribe.What you waiting
            for?
          </p>
        </div>

        <div
          style={{ backgroundImage: `url(${currentBackground})` }}
          className={styles.box2}
        ></div>

        <div className={styles.box3}>
          <div className={styles.links}>
            <FaFacebook className={styles.icon} />
            <SiGmail className={styles.icon} />
            <FaLinkedinIn className={styles.icon} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
