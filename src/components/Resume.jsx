import React from "react";
import { motion } from "framer-motion";


function ResumeCTA() {
  return (
    <section className="py-24 px-6 bg-gray-50 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
          Ready to verify my <br />
          <span className="text-primary">Professional Track Record?</span>
        </h2>

        {/* Centered Tailwind Button */}
        <div className="flex justify-center">
          <a
            href="/Prince_Anucha_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-white font-bold px-10 py-5 rounded-full 
                       shadow-[0_10px_20px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(99,102,241,0.3)] 
                       hover:-translate-y-1 hover:bg-white hover:text-primary border-2 border-transparent 
                       hover:border-primary transition-all duration-300 active:scale-95"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View / Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ResumeCTA;
