import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#works" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tighter text-secondary">
          PRINCE <span className="text-primary text-sm font-light">ANUCHA</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-secondary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col bg-white border-t border-gray-50 px-6 py-4 gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
