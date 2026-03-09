import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import COSHH1 from "../assets/COSHH1.png";
import Firewarden from "../assets/Firewarden.png";
import HSEInduction from "../assets/HSEInduction.png";
import ISPON from "../assets/ISPON.png";
import IWFL1 from "../assets/IWFL1.png";
import IWFL2 from "../assets/IWFL2.png";
import ISO from "../assets/ISO9001.png";
import SPE from "../assets/SPE.png";
import NSE from "../assets/NSE.png";
import TRANS from "../assets/Transcript.png";

const certs = [
  { id: 1, img: COSHH1, title: "COSHH Risk Assessor" },
  { id: 2, img: Firewarden, title: "Fire Warden Training" },
  { id: 3, img: HSEInduction, title: "HSE Induction Training" },
  { id: 4, img: ISO, title: "ISO 9001:2015 Quality Management" },
  { id: 5, img: IWFL1, title: "IWFL Level 1" },
  { id: 6, img: IWFL2, title: "IWFL Level 2" },
  { id: 7, img: ISPON, title: "ISPON HSE Level 3" },
  { id: 8, img: SPE, title: "SPE Safety Training" },
  { id: 9, img: NSE, title: "NSE Graduate Membership" },
  { id: 10, img: TRANS, title: "University Certificate" },
];

// CARD COMPONENT (created inside same file)
function CertCard({ cert, onView }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer"
      onClick={onView}
    >
      <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
        <img
          src={cert.image}
          alt={cert.title}
          className="max-h-full object-contain"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-900">{cert.title}</h3>
        <p className="text-sm text-gray-500">{cert.issuer}</p>
      </div>
    </motion.div>
  );
}

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock scroll when Lightbox is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCert]);

  // Close on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">

        <header className="text-center mb-10">
          <h2 className="text-secondary/60 uppercase tracking-[0.2em] text-xs font-bold mb-2">
            Qualifications
          </h2>

          <h1 className="text-3xl md:text-4xl font-bold text-secondary">
            Certifications
          </h1>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {certs.map((cert) => (
            <CertCard
              key={cert.id}
              cert={{
                image: cert.img,
                title: cert.title,
                issuer: "Professional Certification",
              }}
              onView={() => setSelectedCert(cert)}
            />
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="relative bg-white p-2 rounded-lg shadow-2xl">

                <img
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  className="max-h-[75vh] w-auto object-contain rounded"
                />

                <div className="mt-4 pb-2 px-2 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-5 -right-5 text-white bg-red-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors border-2 border-white"
                >
                  ✕
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;