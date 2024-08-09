import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import Herovideo from "/Coastfg.mp4";

import { motion } from "framer-motion";
import image1 from "/hero.jpg";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <video autoPlay loop muted id='video'>
        <source src={Herovideo} type="video/mp4"/>
      </video>
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br />
              Most Suitable
              <br /> Beach front Properties
            </motion.h1>
          </div>
          

          

          </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
