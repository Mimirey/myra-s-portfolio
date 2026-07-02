/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import {
  Coffee,
  Compass,
  FolderOpen,
  Award,
  FileText,
  Image,
  Github,
  Mail,
  Send,
  Copy,
  Check,
  Menu,
  X,
  ArrowUpRight,
  Linkedin,
} from "lucide-react";

// Import custom sections and components
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import JourneySection from "./components/sections/JourneySection";
import ProjectsSection from "./components/sections/ProjectsSection";
import CompetitionsSection from "./components/sections/CompetitionsSection";
import BeyondSection from "./components/sections/BeyondSection";
import ExploringSection from "./components/sections/ExploringSection";
import ClosingSection from "./components/sections/ClosingSection";
import Footer from "./components/layout/Footer";
import SectionTag from "./components/ui/SectionTag";
import myraPhoto from "@/assets/images/myra_photo.jpg";

type TabId = "journey" | "projects" | "competitions" | "beyond" | "gallery";

const accentColorMap = {
  yellow: "bg-[#FFF9E6] border-[#F2E5C1] text-[#4A3B18]",
  blue: "bg-[#E6F0FA] border-[#C1DBF2] text-[#18354A]",
  pink: "bg-[#FFEBF3] border-[#F2D1E1] text-[#4A1D33]",
  green: "bg-[#EBF7EB] border-[#D1ECD1] text-[#1D4A1D]",
  amber: "bg-[#FFF2E6] border-[#F2DAC1] text-[#4A2D18]",
  purple: "bg-[#f5e6ff] border-[#e6c1f2] text-[#39184a]",
} as const;
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }, // ✅ langsung valid
  },
};

type AccentColor = keyof typeof accentColorMap;

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("journey");
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Detect screen size to handle responsive state & toggles
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("myraisadora7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to scroll to section on mobile or switch tab on desktop
  const handleNav = (tab: TabId) => {
    setIsMobileMenuOpen(false);
    if (isMobile) {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setActiveTab(tab);
    }
  };

  const tabsMeta: {
    id: TabId;
    label: string;
    icon: React.ReactNode;
    color: AccentColor;
  }[] = [
    {
      id: "journey",
      label: "Journey",
      icon: <Compass className="w-4 h-4" />,
      color: "yellow",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderOpen className="w-4 h-4" />,
      color: "blue",
    },
    {
      id: "competitions",
      label: "Competitions",
      icon: <Award className="w-4 h-4" />,
      color: "pink",
    },
    {
      id: "beyond",
      label: "Beyond Code",
      icon: <FileText className="w-4 h-4" />,
      color: "green",
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: <Image className="w-4 h-4" />,
      color: "amber",
    },
  ];

  /* -------------------------------------------------------------
     MOBILE VIEW LAYOUT (Fluid vertical unrolled scrolling)
     ------------------------------------------------------------- */
  if (isMobile) {
    return (
      <div className="min-h-screen bg-cream text-ink flex flex-col pt-16 selection:bg-amber/20">
        {/* Mobile Header bar */}
        <header className="fixed top-0 inset-x-0 h-16 bg-cream/90 backdrop-blur-md border-b border-wood-light/10 z-50 px-6 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-xl font-bold italic text-wood-dark">
              Myra Isadora<span className="text-amber">.</span>
            </span>
            <span className="text-xs bg-paper/60 px-2 py-0.5 rounded font-mono text-ink-light">
              desk
            </span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-sm hover:bg-wood-light/10 text-wood-dark"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </header>

        {/* Mobile Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-16 inset-x-0 bg-cream border-b border-wood-light/10 z-40 p-6 flex flex-col gap-4 shadow-md font-sans"
            >
              {tabsMeta.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNav(tab.id)}
                  className="text-left font-medium text-ink-light hover:text-wood-dark border-b border-wood-light/5 pb-2 text-sm flex items-center gap-2"
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
              <a
                href="mailto:myraisadora7@gmail.com"
                className="w-full text-center py-2 rounded-sm font-sans font-medium bg-[#FFF9E6] text-[#4A3B18] border border-[#F2E5C1] text-xs"
              >
                Direct Mail
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unrolled sections for mobile */}
        <main className="flex-grow space-y-4">
          <HeroSection />
          <div id="about">
            <AboutSection />
          </div>
          {/* <div id="journey">
            <JourneySection />
          </div> */}
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="competitions">
            <CompetitionsSection />
          </div>
          <div id="beyond">
            <BeyondSection />
          </div>
          <ExploringSection />
          <div id="gallery">
            <ClosingSection />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  /* -------------------------------------------------------------
     DESKTOP SIDEBAR + NOTEBOOK TABBED INTERACTIVE VIEW
     ------------------------------------------------------------- */
  return (
    <div className="h-screen w-screen overflow-hidden bg-cream text-ink flex font-sans paper-grain relative select-none">
      {/* 🏡 Left Sidebar: Static Profile & Shortcuts Pane */}
      <aside className="w-[320px] xl:w-[360px] h-full shrink-0 border-r border-wood-light/15 bg-paper/15 flex flex-col justify-between p-6 overflow-y-auto no-scrollbar relative z-30">
        {/* Sidebar Header Block */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold italic text-wood-dark">
                Myra Isadora<span className="text-amber">.</span>
              </span>
              <div className="flex items-center gap-1 bg-[#E9A03B] px-2 py-0.5 rounded text-[10px] font-mono text-ink-light border border-amber/15">
                <Coffee className="w-2.5 h-2.5 text-wood-dark animate-pulse" />
                <span className="text-wood-dark">workspace</span>
              </div>
            </div>
          </div>

          {/* Intro description */}
          <div className="space-y-2">
            <p className="font-body text-sm text-ink-light leading-relaxed">
              Most of my favorite experiences started with one sentence: "I've
              never done this before."
            </p>
          </div>
          {/* Simple honest bio */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-ink/80 max-w-xl leading-relaxed"
          >
            How far can i go? I guess there's only one way to find out.
          </motion.p>

          {/* Tactile profile photo card from Hero Section for beautiful layout representation */}
          <div className="relative pt-4 flex justify-center">
            {/* Hanging element block */}
            <div className="w-44 h-56 bg-[#7A8C3E] p-3 pb-5 border border-wood-light/30 shadow-md relative rounded-xs transform -rotate-1 hover:rotate-1 hover:scale-102 transition-transform duration-300">
              {/* Tape sticker decoration */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#E6D4AA]/60 transform rotate-1 border border-white/20 shadow-2xs pointer-events-none" />

              {/* Vector desktop illustration as profile */}
              <div className="w-full h-36 bg-[#FAF6F0] rounded-xs relative overflow-hidden flex flex-col items-center justify-center border border-wood-light/10">
                <img
                  src={myraPhoto}
                  alt="Myra Isadora"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center pt-2 select-none">
                <span className="font-display italic text-xs text-ink-light font-semibold block leading-none">
                  Myra Isadora
                </span>
                <span className="font-mono text-[8px] text-wood-dark uppercase tracking-wider block mt-1">
                  Seeking opportunity to grow
                </span>
              </div>
            </div>
          </div>

          {/* Quick Desk Navigation Tab Selects */}
          <div className="space-y-1.5 pt-4">
            <span className="font-mono text-[9px] text-ink-muted uppercase tracking-wider block mb-2 px-1">
              Notebook sections:
            </span>
            {tabsMeta.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleNav(tab.id)}
                  className={`w-full px-3 py-2.5 rounded-sm border text-xs font-semibold font-sans transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? accentColorMap[tab.color]
                      : "bg-transparent border-transparent hover:bg-wood-light/10 text-ink-light hover:text-wood-dark"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </span>
                  <span
                    className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-mono ${isActive ? "opacity-100" : ""}`}
                  >
                    {isActive ? "✒️ Active" : "Open 📄"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer block: Simple copy mail card and metadata (anti-slop, clean details) */}
        <div className="space-y-4 pt-4 border-t border-wood-light/10 font-sans">
          {/* Quick mail setup */}
          <div className="bg-[#E9A03B] border border-wood-light/20 p-4 rounded-sm shadow-2xs space-y-2 relative overflow-hidden">
            <span className="font-mono text-[8px] text-wood-dark uppercase tracking-wider block">
              CONTACT SHELF
            </span>
            <p className="font-body text-xs text-wood-dark font-semibold truncate leading-none">
              myraisadora7@gmail.com
            </p>

            <div className="flex gap-2 pt-1.5">
              <a
                href="mailto:myraisadora7@gmail.com"
                className="px-2.5 py-1 bg-wood-dark hover:bg-[#523A26] text-cream rounded-xs font-sans font-medium text-[10px] flex items-center gap-1 transition-all"
              >
                <Send className="w-2.5 h-2.5" /> Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 border border-wood-light/25 hover:bg-paper/40 text-wood-dark rounded-xs font-sans font-medium text-[10px] flex items-center gap-1 transition-all cursor-pointer"
              >
                {copied ? (
                  <Check className="w-2.5 h-2.5 text-sage" />
                ) : (
                  <Copy className="w-2.5 h-2.5" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Signature and channels */}
          <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
            <span>STABLE WORKSPACE</span>
            <div className="flex gap-2">
              <a
                href="https://github.com/Mimirey"
                target="_blank"
                rel="opener noreferrer"
                className="hover:text-wood-dark transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/myra-isadora/"
                className="p-1.5 rounded-sm bg-paper/40 hover:bg-paper text-ink-light hover:text-wood-dark transition-all"
                title="Checkout Linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* 📖 Right Pane: Spiral-Notebook style content viewer container */}
      <main className="flex-1 h-full bg-cream overflow-hidden flex flex-col relative">
        {/* Spiral Notebook Outer frame wrapper */}
        <div className="flex-grow h-full p-4 xl:p-8 overflow-y-auto relative no-scrollbar bg-cream">
          {/* Notebook decorative header / current active tab details */}
          <div className="max-w-4xl mx-auto flex items-center justify-between border-b border-wood-light/15 pb-4 mb-6 select-none font-sans">
            <div className="flex items-center gap-2">
              <div>
                <span className="font-mono text-[9px] text-ink-muted uppercase tracking-widest block">
                  Notebook Tab View
                </span>
                <span className="font-display font-semibold italic text-sm text-wood-dark capitalize">
                  myra's workspace / {activeTab} section
                </span>
              </div>
            </div>
          </div>

          {/* Main content display with gentle exit-entry motion */}
          <div className="max-w-4xl mx-auto pb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                {/* Embedded dynamic display tabs mapped directly to loaded views */}
                {activeTab === "journey" && (
                  <div className="space-y-4">
                    <AboutSection />
                    {/* <JourneySection /> */}
                  </div>
                )}
                {activeTab === "projects" && <ProjectsSection />}
                {activeTab === "competitions" && <CompetitionsSection />}
                {activeTab === "beyond" && (
                  <div className="space-y-4">
                    <BeyondSection />
                    <ExploringSection />
                  </div>
                )}
                {activeTab === "gallery" && <ClosingSection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Humble desk bottom helper bar (anti-slop credits) */}
        <footer className="h-10 border-t border-wood-light/10 bg-paper/5 shrink-0 px-6 xl:px-12 flex items-center justify-between select-none font-sans">
          <span className="font-mono text-[9px] text-[#EAEFF7]">
            Go on, have a look!
          </span>
          <span className="font-mono text-[9px] text-ink-muted flex items-center gap-1">
            <span>Handcrafted portfolio in 2026</span>
          </span>
        </footer>
      </main>
    </div>
  );
}
