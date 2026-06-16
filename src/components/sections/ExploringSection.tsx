import React from "react";
import { motion } from "motion/react";
import { BookOpen, Compass, Sparkles } from "lucide-react";
import SectionTag from "../ui/SectionTag";
import TagPill from "../ui/TagPill";

export default function ExploringSection() {
  const currentInterests = [
    "Effective Design",
    "Problem Solving",
    "Backend",
    "Mobile Front End",
    "Website Development",
    "Cloud Computing",
    "English Public Speaking",
    "Client Communication",
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-6 text-center select-none relative">
      <div className="absolute right-4 top-2 text-4xl opacity-15 rotate-12 pointer-events-none">
        ✏️
      </div>
      <div className="absolute left-6 bottom-4 text-4xl opacity-10 -rotate-12 pointer-events-none">
        📓
      </div>

      <div className="space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2">
          <SectionTag icon="🧭">Currently Exploring</SectionTag>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-wood-dark leading-tight italic">
            "What's Currently On My Desk?"
          </h3>
          <p className="font-body text-base md:text-lg text-ink-light max-w-xl mx-auto leading-relaxed">
           Honestly, ive never really narrow myself in only one specific field. Instead, i would like a lil spice of challenge on learning new things
          </p>
        </div>

        {/* Scattered Dynamic Labels */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto pt-4">
          {currentInterests.map((interest) => (
            <TagPill
              key={interest}
              size="md"
              className="py-1.5 px-3.5 bg-[#FFFDF8] border border-wood-light/25 rounded-md hover:bg-[#FAF6F0] shadow-2xs hover:shadow-xs rounded-sm text-sm"
            >
              {interest}
            </TagPill>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-muted">
          Updated quarterly • Checked out from local training centers
        </p>
      </div>
    </section>
  );
}
