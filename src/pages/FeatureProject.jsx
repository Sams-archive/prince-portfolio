import React from "react";

function FeaturedProject() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Success Story
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-secondary">
            Featured Project
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Project Details */}
          <div className="order-2 md:order-1">
            <h4 className="text-3xl font-bold text-secondary mb-6">
              PGSL Inaugural HSE Week
            </h4>
            
            <div className="space-y-8">
              <div>
                <h5 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">
                  The Challenge
                </h5>
                <p className="text-accent text-lg leading-relaxed">
                  As the first of its kind at Pegis Global Services Ltd., the annual HSE week 
                  required innovative ideas to remain highly engaging, educative, and 
                  memorable for a diverse workforce.
                </p>
              </div>

              <div>
                <h5 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">
                  The Result
                </h5>
                <p className="text-accent text-lg leading-relaxed">
                  The program was a massive success, significantly boosting team morale. 
                  It established a new safety tradition that employees now look forward 
                  to annually.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <p className="text-secondary font-bold">Award of Recognition</p>
                    <p className="text-sm text-accent">Top Management Recognition for the HSE Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Project Visual/Card */}
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase">
                  Safety Culture
                </div>
                <h4 className="text-2xl font-bold text-secondary">
                  "Something they are now looking forward to."
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Innovation", "Engagement", "ISO 45001", "KPIs"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-accent py-1 px-3 bg-white shadow-sm rounded-md border border-gray-50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-indigo-50 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;