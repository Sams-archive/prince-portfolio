import React from "react";

function ProjectCard() {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-sm font-bold text-primary uppercase tracking-widest">
        Featured Project
      </span>
      <h3 className="text-2xl font-bold mt-2 text-secondary">
        PGSL Inaugural HSE Week
      </h3>

      <div className="mt-4 space-y-3 text-accent">
        <p>
          <strong>The Challenge:</strong> Designing a memorable, engaging
          inaugural safety program from scratch.
        </p>
        <p>
          <strong>The Result:</strong> Achieved Top Management Award for
          Excellence and 100% team engagement.
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">
          ISO 45001
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">
          Strategic Planning
        </span>
      </div>
    </div>
  );
}
export default ProjectCard;
