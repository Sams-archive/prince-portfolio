import React from "react";
const skills = [
  { name: "ISO Compliance", desc: "Expert in ISO 9001, 14001, & 45001 standards." },
  { name: "Incident Prevention", desc: "Zero LTI/FAT record maintained over 11 months." },
  { name: "Technical Writing", desc: "Proficient in ERP, Risk Assessment, and HSE reporting." },
  { name: "Emergency Response", desc: "Lead for staff drills and fire warden training." },
  { name: "COSHH & GHS", desc: "Implementation of chemical safety and labeling." },
  { name: "Digital Safety Tools", desc: "Developed live trackers for hazard hunt campaigns." }
];

function Skills() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Technical Toolkit</h2>
        <h3 className="text-4xl font-bold text-secondary mb-16">Core Safety Competencies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group p-8 border border-gray-100 rounded-2xl hover:border-primary/20 hover:bg-gray-50 transition-all">
              <div className="w-12 h-12 bg-indigo-50 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="font-bold">0{index + 1}</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">{skill.name}</h4>
              <p className="text-accent leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;