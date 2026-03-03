import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-secondary text-white pt-24 pb-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
          {/* Column 1: Contact Inquiry */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-6">
              Ready to improve <br />{" "}
              <span className="text-primary">Safety KPIs?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-sm">
              Currently based in Port Harcourt, Nigeria. Open to technical HSE
              consultations and safety engineering opportunities.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:princeanucha4@gmail.com"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all"
              >
                Get in Touch
              </a>
              {/* Added Phone Number */}
              <a
                href="tel:+2349064486980"
                className="block text-gray-300 hover:text-primary transition-colors font-medium"
              >
                +234 906 448 6980
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Smooth Scroll) */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#works"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Works
              </a>
            </nav>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col md:items-end">
            <div className="space-y-4 text-left md:text-right">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Socials
              </p>
              <a
                href="https://www.linkedin.com/in/prince-anucha"
                target="_blank"
                rel="noreferrer"
                className="block text-2xl font-bold hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
               href="https://wa.me/2349064486980?text=Hello%20Prince,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20safety%20engineering%20opportunity."
                target="_blank"
                rel="noreferrer"
                className="block text-2xl font-bold hover:text-primary transition-colors"
              >
                Whatsapp
              </a>
              <p className="text-gray-400 italic">Safety First, Always.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-gray-500 text-sm">
          <p>© {currentYear} Prince Anucha. All rights reserved.</p>
          <p className="mt-4 md:mt-0">HSE Officer | Safety Engineer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
