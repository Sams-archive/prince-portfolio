import React from "react";
import { motion } from "framer-motion"; // Import motion
import prince from "../assets/prince1.png";

function Hero() {
  // Animation Variants for staggering the list
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full overflow-hidden flex items-center bg-gray-50 pt-32 pb-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
            Driving <br className="hidden md:block" />
            and fostering a positive <br className="hidden md:block" />
            <motion.span
              initial={{ color: "#0F172A" }}
              animate={{ color: "#6366F1" }}
              transition={{ delay: 1, duration: 1 }}
              className="text-primary"
            >
              workplace safety culture
            </motion.span>
          </h1>

          <motion.ul
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="mt-6 md:mt-8 space-y-4 text-base md:text-lg text-accent max-w-md"
          >
            <motion.li variants={itemVars} className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span>
                <strong>Certified Safety Engineer</strong> specializing in ISO
                compliance.
              </span>
            </motion.li>
            <motion.li variants={itemVars} className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span>
                Proactive in <strong>accident prevention</strong> with zero
                recordable incidents LTIs and FAT.
              </span>
            </motion.li>
            <motion.li variants={itemVars} className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span>
                Proven leader in achieving <strong>positive HSE KPIs</strong>.
              </span>
            </motion.li>
            {/* <motion.li variants={itemVars} className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span>
               B.Tech in Petroleum Engineering <strong>(CGPA: 4.01/5.00)</strong>.
              </span>
            </motion.li> */}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button onClick={() => window.open("mailto:princeanucha2015@gmail.com", "_blank")} className="text-primary px-6 py-4 bg-white border font-bold border-gray-200 rounded-lg w-full sm:w-auto hover:bg-primary hover:text-white transition-all transform hover:scale-105">
              Send a Mail
            </button>
            <button onClick={() => window.open("https://www.linkedin.com/in/prince-anucha", "_blank")} className="bg-primary text-white px-8 py-4 rounded-lg font-bold w-full sm:w-auto hover:bg-white hover:text-primary border border-transparent hover:border-primary transition-all transform hover:scale-105">
              Connect With Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-2 md:order-2 px-4 md:px-0"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-xl">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={prince}
              alt="Prince Anucha"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Animated Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-5 right-5 text-primary text-2xl opacity-20"
          >
            {" "}
            /{" "}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
