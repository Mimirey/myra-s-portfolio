import React from "react";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { journeyChapters } from "../../data";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";
import TagPill from "../ui/TagPill";

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 max-w-6xl mx-auto px-6 relative">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <SectionTag icon="🧭" className="mx-auto">
            Growth Timeline
          </SectionTag>
          <SectionTitle
            title="Learning Through Experience"
            subtext="Not a stack of static tags — a true living story of persistent learning and development."
            className="flex flex-col items-center"
          />
        </div>

        {/* Central Vertical Timeline */}
        <div className="relative mt-16 pb-8">
          {/* Wooden vertical line down the middle on md screens */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-0.5 border-l-2 border-dashed border-wood-light/35 pointer-events-none" />

          {/* Timeline Items list */}
          <div className="space-y-12 relative z-10">
            {journeyChapters.map((chapter, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={chapter.id}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between w-full relative ${
                    isEven ? "md:row-reverse" : ""
                  }`}
                >
                  {/* Point Indicator badge */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-1.5 flex items-center justify-center pointer-events-none select-none">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-10 h-10 rounded-full bg-[#FFF9E6] border-2 border-wood-mid shadow-xs flex items-center justify-center text-lg z-20 text-wood-dark select-none"
                    >
                      {chapter.icon}
                    </motion.div>
                  </div>

                  {/* Left Spacer for Desktop layout matching / alternating */}
                  <div className="hidden md:block w-[45%] pointer-events-none" />

                  {/* Chapter Card Content Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 90 }}
                    className={`ml-14 md:ml-0 w-auto md:w-[45%] bg-card-warm p-6 rounded-md border border-wood-light/20 shadow-xs relative flex flex-col justify-between hover:border-wood-light/40 hover:shadow-sm transition-all duration-300 group`}
                  >
                    {/* Chapter index label */}
                    <div className="flex items-center justify-between border-b border-wood-light/10 pb-2 mb-4 select-none">
                      <span className="font-display font-semibold italic text-base text-wood-dark/75">
                        Chapter 0{chapter.id}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-ink-muted">Milestone</span>
                    </div>

                    {/* Chapter details */}
                    <div className="space-y-3">
                      <h3 className="font-display text-lg font-semibold text-wood-dark leading-tight group-hover:text-amber transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="font-body text-base text-ink-light leading-relaxed">
                        {chapter.description}
                      </p>

                      {/* Handwritten Sticky Highlight Callout */}
                      {chapter.detailNote && (
                        <div className="mt-3 pl-3 border-l-2 border-amber/35 italic font-body text-sm text-wood-mid leading-relaxed">
                          "{chapter.detailNote}"
                        </div>
                      )}
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-4 border-t border-wood-light/5">
                      {chapter.tags.map((tag) => (
                        <TagPill key={tag} size="sm">
                          {tag}
                        </TagPill>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
