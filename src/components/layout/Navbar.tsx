import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Coffee, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Competitions", href: "#competitions" },
  { label: "More Than Code", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-wood-light/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Title */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="group flex items-center gap-2"
        >
          <span className="font-display text-2xl font-semibold italic text-wood-dark tracking-tight">
            Myra Isadora<span className="text-amber">.</span>
          </span>
          <div className="hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-paper/60 px-2 py-0.5 rounded text-[10px] font-mono text-ink-light">
            <Coffee className="w-3 h-3 text-amber animate-bounce" />
            <span>study desk</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="group relative font-sans text-sm font-medium text-ink-light hover:text-wood-dark transition-colors duration-200"
            >
              <span className="hand-drawn-line pb-1">{link.label}</span>
            </a>
          ))}

          {/* Let's Hi CTA */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="px-4 py-1.5 rounded-sm font-sans font-medium text-xs bg-[#FFF9E6] hover:bg-[#FFF2E6] text-[#4A3B18] border border-[#F2E5C1] shadow-xs rotate-[-1deg] transition-all duration-200 hover:rotate-1 hover:scale-105 inline-flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage ring-2 ring-sage/20 animate-pulse"></span>
            Say Hi!
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 rounded-sm text-ink hover:bg-wood-light/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-wood-light/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-base font-semibold text-ink-light hover:text-wood-dark border-b border-wood-light/5 pb-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full text-center py-2.5 rounded-sm font-sans font-medium bg-[#FFF9E6] text-[#4A3B18] border border-[#F2E5C1] shadow-xs"
              >
                Say Hi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
