import React from "react";

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Heading and Core Bio */}
        <div>
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
            About Prince
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-8">
            Engineering a safer <br />
            workplace in the <br />
            <span className="text-primary">Oil & Gas industry.</span>
          </h3>
          <p className="text-lg text-accent leading-relaxed mb-6">
            I am a practicing HSSEF Officer/Coordinator with a proven commitment
            to safety leadership and professionalism, operational excellence,
            and continuous improvement
          </p>
          <p className="text-lg text-accent leading-relaxed">
            I specialize in rigorous application of ISO 9001, 14001, and 45001
            standards to drive sustainable safety cultures.
          </p>
        </div>

        {/* Right: Detailed Experience & Associations */}
        <div className="space-y-10 bg-gray-50 p-8 md:p-12 rounded-3xl">
          <div>
            <h4 className="text-xl font-bold text-secondary mb-4">
              Professional Memberships
            </h4>
            <ul className="space-y-3 text-accent">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Graduate Member, Nigerian Society of Engineers (GMNSE)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Graduate Member, Institute of Safety Professionals of Nigeria
                (ISPON)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Young Professional Member, Society of Petroleum Engineers
                (YPMSPE)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-secondary mb-4">
              Technical Prowess
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Wellhead Maintenance",
                "COSHH Implementation",
                "GHS Labeling",
                "JSA/JHA Development",
                "Technical Writing",
                "Risk Assessment",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
