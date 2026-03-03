import React from "react";

const certs = [
  "ISPON HSE Level 3",
  "ISO 45001:2018 Awareness",
  "Fire Warden Training",
  "COSHH Risk Assessor",
  "IWCF Level 1",
  "HSE Induction Training",
];

function Certifications() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Header now sits on top */}
        <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center">
          Certifications
        </h1>

        {/* Wrapper for badges to stay in a column or wrap neatly if they are many */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-full bg-indigo-50 text-primary font-bold text-sm whitespace-nowrap"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Certifications;
