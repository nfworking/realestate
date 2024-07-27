import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import heroimg from "../public/r1.png";
const Hero = () => {
  return (
    <section className="hero-wrapper">
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
              The <br />
              Most Experienced
              <br /> Real Estate Agents
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>We have a verity of Real Estate agents that can help your needs</span>
            <span>Forget all difficulties in finding a residence by your self</span>
          </div>

          

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={9000} duration={10} /> <span>+</span>
              </span>
              <span className="secondaryText">Homes Sold</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={40000} duration={10} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp  start={0} end={54} duration={10}/> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
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
            <img src={heroimg} alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
