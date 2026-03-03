import React from "react";  

const experiences = [
  {
    role: "HSE Officer",
    company: "Pegis Global Services Ltd.",
    period: "Current",
    tasks: ["Maintained zero LTI and FAT records", "Implements IOGP Start Work Checks", "Conducts daily safety operational meetings"]
  },
  {
    role: "Science Editor",
    company: "Reddot Africa Educational Services",
    period: "2024 - 2025",
    tasks: ["Reviewed professional recommendations for manuscripts", "Handled author-publisher correspondence"]
  }
];

function Experience() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-12 text-center">Career Path</h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 border-l-2 border-primary/20 pl-8 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              <div className="md:w-1/3">
                <span className="text-primary font-bold">{exp.period}</span>
                <h4 className="text-2xl font-bold text-secondary mt-1">{exp.role}</h4>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-3">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="text-accent flex gap-2">
                      <span className="text-primary">•</span> {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;