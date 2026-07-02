import React from "react";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Coffee,
  Compass,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Button from "../ui/Button";
import StickyNote from "../ui/StickyNote";
import myraPhoto from "@/assets/images/myra_photo.jpg";

export default function HeroSection() {
  const smoothScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }, // ✅ langsung valid
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-between py-12 md:py-20 overflow-hidden paper-grain"
    >
      {/* 💡 Warm Table-Lamp Amber Glow (Corner Radial Gradient effect) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-amber/15 via-amber/5 to-transparent blur-3xl pointer-events-none select-none z-0" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-sage/10 via-transparent to-transparent blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Copy and Greeting */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-6 md:space-y-8"
        >
          {/* Section Greeting Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2"
          >
            <span className="font-mono text-xs text-wood-dark tracking-wider uppercase select-none">
              Oh! Look who just enter Myra's study desk
            </span>
          </motion.div>

          {/* Heading using premium font pairing */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="font-display text-5xl md:text-6.5xl font-semibold text-wood-dark tracking-tight leading-none">
              Hi, I'm{" "}
              <span className="text-wood-dark relative inline-block">
                Myra Isadora
                <svg
                  className="absolute bottom-1 left-0 w-full h-2 text-amber animate-pulse"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 C30,10 70,0 100,5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-ink-light font-light leading-relaxed max-w-2xl">
              Most of my favorite experiences started with one sentence: "I've
              never done this before."
            </p>
          </motion.div>

          {/* Simple honest bio */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-ink/80 max-w-xl leading-relaxed"
          >
            How far can i go? I guess there's only one way to find out.
          </motion.p>

          {/* Call to Actions (Tactile desk button triggers) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              variant="primary"
              onClick={() => smoothScrollTo("#journey")}
              className="group text-white"
            >
              Explore My Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => smoothScrollTo("#projects")}
            >
              View Projects
            </Button>
          </motion.div>

          {/* Subtle social links representing real human channels */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-4 border-t border-wood-light/10 max-w-xs"
          >
            <span className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
              desk shortcuts:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Mimirey"
                target="_blank"
                rel="opener noreferrer"
                className="p-1.5 rounded-sm bg-paper/40 hover:bg-paper text-ink-light hover:text-wood-dark transition-all"
                title="GitHub Portfolio"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/myra-isadora/"
                className="p-1.5 rounded-sm bg-paper/40 hover:bg-paper text-ink-light hover:text-wood-dark transition-all"
                title="Checkout Linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Cozy Study Desk Physical Decoration Layout */}
        <div className="lg:col-span-5 relative h-[380px] md:h-[450px] w-full flex items-center justify-center">
          {/* Main Visual background: Cozy Desk Drawing or stylized stack */}
          <div className="absolute inset-0 bg-paper/10 border-2 border-dashed border-wood-light/10 rounded-lg p-4 flex items-center justify-center notebook-grid" />

          {/* Desktop Stacked Cards imitating study papers & notes */}
          {/* Card 1: Cloud Architecture Note (blue tint) */}
          <div className="absolute top-12 right-6 w-56 md:w-64 z-20">
            <StickyNote color="blue" rotation={3}>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-blue-900 border border-blue-200 px-1.5 py-0.5 rounded bg-blue-100/50">
                    Is a 'Dora'
                  </span>
                  <span className="font-mono text-[10px] text-ink-muted">
                    lifetime
                  </span>
                </div>
                <h4 className="font-display font-semibold text-sm text-blue-950">
                  Curious Explorer
                </h4>
                <p className="font-body text-xs text-blue-900/80 leading-snug">
                  Senang mencoba hal-hal baru dan eksplorasi kemampuan diri
                  secara otodidak
                </p>
              </div>
            </StickyNote>
          </div>

          {/* Card 2: Interactive State / Quick Thinker (yellow sticky note overlapping) */}
          <div className="absolute bottom-12 left-6 w-52 md:w-60 z-30">
            <StickyNote color="yellow" rotation={-4}>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-sans font-bold text-xs uppercase text-amber">
                    Growth Motto
                  </span>
                </div>
                <p className="font-body text-[13px] italic text-[#4A3B18] leading-normal font-medium">
                  \"Opportunity came to those who are ready!\"
                </p>
              </div>
            </StickyNote>
          </div>

          {/* Card 3: Monogram polaroid (Myra's Profile Frame) */}
          <motion.div
            initial={{ rotate: -15, scale: 0.9 }}
            whileHover={{ rotate: -5, scale: 1.05, zIndex: 40 }}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-60 bg-[#FFFDF8] p-3 pb-5 border border-wood-light/30 shadow-md z-15 flex flex-col justify-between select-none"
          >
            {/* Hanging Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#E6D4AA]/60 transform rotate-2 border border-white/25 shadow-2xs pointer-events-none" />

            {/* Photo frame container — Beautiful Non-Interactive Cozy Desktop Vector Illustration */}
            <div className="w-full h-40 bg-[#FAF6F0] rounded-xs relative overflow-hidden flex flex-col items-center justify-center border border-wood-light/10">
              <img
                src={myraPhoto}
                alt="Myra Isadora"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Polaroid Label caption */}
            <div className="text-center pt-2">
              <span className="font-display italic text-xs text-wood-dark font-medium block">
                Myra Isadora
              </span>
              <span className="font-mono text-[8px] text-ink-muted uppercase tracking-wider block mt-0.5">
                Student who actively curious
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
