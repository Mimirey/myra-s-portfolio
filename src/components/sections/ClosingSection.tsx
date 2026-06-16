import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Send, Eye, X, Award, MapPin } from "lucide-react";
import SectionTag from "../ui/SectionTag";
import dinacom from "@/assets/images/dynakum.jpg";
import smarta from "@/assets/images/smarta.jpg";
import lkskab from "@/assets/images/lekaeskudus.jpg";
import lksreg from "@/assets/images/lekaesjateng.jpg";
import gacci from "@/assets/images/gecii.jpg";

interface GalleryItem {
  id: string;
  competitionName: string;
  achievement: string;
  scope: string;
  tag: string;
  story: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "lks-kudus",
    competitionName: "LKS Cloud Computing 2026 (Kudus)",
    achievement: "1st Place (Gold Medal)",
    scope: "Regency Level AWS Engineering",
    tag: "AWS Cloud Architecture",
    story:
      "Designed automated secure VPC subnets, deployed auto-scaling web clusters, and configured custom cloud networking systems.",
  },
  {
    id: "lks-jateng",
    competitionName: "LKS Cloud Computing 2026 (Jateng)",
    achievement: "Medallion of Excellence",
    scope: "Central Java Provincial Level",
    tag: "Infrastructure Automation",
    story:
      "Competed with top cloud engineers under high-pressure scenarios to script server configuration automation and manage secure containerization.",
  },
  {
    id: "smarta-logika",
    competitionName: "Smarta Logika 2026",
    achievement: "2nd Place",
    scope: "National Level AI Hackathon",
    tag: "AI Frontend Developer",
    story:
      "Engineered a rapid diagnostic dashboard powered by lightweight AI routing and structured layouts in under 36 hours.",
  },
  {
    id: "dinacom",
    competitionName: "DINACOM 11.0",
    achievement: "1st Runner Up",
    scope: "National Hackathon & Presentation",
    tag: "Presenter & Frontend Developer",
    story:
      "Coordinated frontend development, crafted the project proposal dossier, and pitched the social impact value to panels of industry leaders.",
  },
  {
    id: "gacci",
    competitionName: "GACCI 2025",
    achievement: "Top 10 Finalist",
    scope: "Game Conception Challenge",
    tag: "Game Level Designer",
    story:
      "Created immersive architectural game mockups and presented structural mechanical diagrams during live pitcher selections.",
  },
];

const getCompetitionVector = (id: string, customClasses = "w-full h-full") => {
  if (id === "lks-kudus") {
    return (
      <img
        src={lkskab}
        alt="Myra Isadora"
        className="w-full h-full object-cover object-top"
      />
    );
  }
  if (id === "lks-jateng") {
    return (
      <img
        src={lksreg}
        alt="Myra Isadora"
        className="w-full h-full object-cover object-top"
      />
    );
  }
  if (id === "smarta-logika") {
    return (
      <img
        src={smarta}
        alt="Myra Isadora"
        className="w-full h-full object-cover object-top"
      />
    );
  }
  if (id === "dinacom") {
    return (
      <img
        src={dinacom}
        alt="Myra Isadora"
        className="w-full h-full object-cover object-top"
      />
    );
  }
  // gacci
  return (
    <img
      src={gacci}
      alt="Myra Isadora"
      className="w-full h-full object-cover object-top"
    />
  );
};

export default function ClosingSection() {
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    id: string;
    title: string;
    story: string;
  } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("myraisadora7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-paper/10 border-t border-wood-light/10 relative overflow-hidden paper-grain"
    >
      {/* Background visual accents */}
      <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-amber/5 to-transparent blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-sage/10 to-transparent blur-3xl pointer-events-none select-none" />

      <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10 w-full">
        {/* Gallery Section Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <SectionTag icon="🖼️">Competition Memories</SectionTag>
          <h2 className="font-display text-4xl font-semibold text-wood-dark tracking-tight leading-tight">
            My Highlights &amp; Competition Gallery
          </h2>
          <p className="font-body text-lg text-ink-light">
            A live storyboard of dynamic challenges. Click any polaroid memory
            card below to zoom in and expand its conceptual design layout.
          </p>
        </div>

        {/* Polaroid corkboard grid layout (Responsive columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => {
            // Organic staggered rotational slant
            const rotationPreset = [1.5, -2, 2, -1.5, 3];
            const rotation = rotationPreset[index % rotationPreset.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, scale: 1.02, rotate: rotation * 0.4 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ rotate: `${rotation}deg` }}
                className="bg-[#FFFDF8] border border-wood-light/25 p-4 pb-6 rounded-xs shadow-md relative flex flex-col justify-between cursor-pointer group"
                onClick={() => {
                  setSelectedImage({
                    id: item.id,
                    title: item.competitionName,
                    story: item.story,
                  });
                }}
              >
                {/* Washi Tape Ribbon decoration */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#E6D4AA]/60 transform rotate-1 border border-white/20 shadow-2xs pointer-events-none" />

                <div className="space-y-4">
                  {/* Photo Space inside the polaroid card */}
                  <div className="w-full h-48 bg-[#FAF6F0] rounded-xs relative overflow-hidden flex flex-col items-center justify-center border border-wood-light/10">
                    {getCompetitionVector(
                      item.id,
                      "w-full h-full object-cover",
                    )}

                    <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="p-1 px-1.5 bg-wood-dark/95 text-white rounded text-[10px] font-mono flex items-center gap-1 shadow-xs">
                        <Eye className="w-3 h-3" /> Zoom
                      </span>
                    </div>
                  </div>

                  {/* Caption & Metadata description (Classic Polaroid bottom label) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-wood-light/10 pb-1.5">
                      <span className="font-mono text-[9px] text-amber uppercase font-semibold">
                        {item.tag}
                      </span>
                      <span className="font-mono text-[9px] text-ink-muted flex items-center gap-0.5">
                        <Award className="w-2.5 h-2.5 shrink-0" />{" "}
                        {item.achievement}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-sm text-wood-dark leading-tight">
                        {item.competitionName}
                      </h4>
                      <p className="font-body text-xs text-ink-light leading-relaxed">
                        {item.story}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scope marker footer inside polaroid */}
                <div className="mt-4 pt-3 border-t border-wood-light/5 text-[9px] font-mono text-ink-muted flex items-center justify-between">
                  <span>INDEX: MEMORY</span>
                  <span className="flex items-center gap-0.5 uppercase">
                    <MapPin className="w-2.5 h-2.5 shrink-0 text-sage" />{" "}
                    {item.scope.split(" ")[0]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Connect Mailbox Area (Clean Layout) */}
        <div
          id="mailbox-cta"
          className="max-w-4xl mx-auto border-t border-dashed border-wood-light/20 pt-16 flex flex-col lg:flex-row items-center justify-between gap-8 font-sans"
        >
          <div className="space-y-3 max-w-lg">
            <SectionTag icon="📬">Connect</SectionTag>
            <h3 className="font-display text-2xl font-semibold text-wood-dark italic">
              "Let's build something beautiful together"
            </h3>
            <p className="font-body text-base text-ink-light leading-relaxed">
              Have an open cloud-computing trial, a front-end position, or
              simply want to chat development and system architecture? Send me a
              mail directly!
            </p>
          </div>

          <div className="bg-card-warm p-6 rounded-md border border-wood-light/25 shadow-xs flex items-center justify-between gap-8 min-w-[320px] relative overflow-hidden">
            {/* Postal mark decoration */}
            <div className="absolute top-2 right-2 font-display italic text-[10px] text-wood-light/40 select-none">
              M.
            </div>

            <div className="space-y-2 flex-grow">
              <span className="font-mono text-[9px] uppercase tracking-wide text-ink-muted">
                PRIMARY EMAIL
              </span>
              <p className="font-body text-base text-ink font-semibold leading-none">
                myraisadora7@gmail.com
              </p>

              <div className="flex items-center gap-2 pt-3">
                <a
                  href="mailto:myraisadora7@gmail.com"
                  className="px-3 py-1.5 bg-wood-dark hover:bg-[#523A26] text-cream rounded-sm font-sans font-medium text-xs flex items-center gap-1 transition-colors shadow-xs"
                >
                  <Send className="w-3 h-3" /> Mail
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 border border-wood-light/25 hover:bg-paper/40 text-wood-dark rounded-sm font-sans font-medium text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-sage" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Lightbox Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2C1F14]/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-[#FFFDF8] max-w-xl w-full p-6 border border-wood-light/20 shadow-2xl rounded-sm text-left flex flex-col gap-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close pin */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-paper/50 text-[#6B4C35] transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-80 bg-[#FAF6F0] rounded-xs overflow-hidden border border-wood-light/10">
                {getCompetitionVector(selectedImage.id, "w-full h-full p-8")}
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-lg text-[#6B4C35]">
                  {selectedImage.title}
                </h4>
                <p className="font-body text-sm text-[#6B5744] leading-relaxed">
                  {selectedImage.story}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
