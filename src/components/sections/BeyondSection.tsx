import React from "react";
import { Newspaper, Users, Presentation, Quote } from "lucide-react";
import { beyondCodingItems } from "../../data";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";
import StickyNote from "../ui/StickyNote";

export default function BeyondSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "📰": <Newspaper className="w-5 h-5" />,
    "🗂️": <Users className="w-5 h-5" />,
    "🎤": <Presentation className="w-5 h-5" />
  };

  return (
    <section id="activities" className="py-20 bg-paper/20 border-y border-wood-light/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none notebook-grid" />

      <div className="max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="space-y-4">
          <SectionTag icon="🎤">More Than Code</SectionTag>
          <SectionTitle
            title="Beyond Tech Stack"
            subtext="Engineering becomes complete when paired with active collaboration, editorial clarity, and confident live narration. Here are my central active non-coding spaces:"
          />
        </div>

        {/* 3 Sticky Notes Row/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beyondCodingItems.map((item, index) => {
            // Give alternating rotational slants to mimic a hand-arranged notes board
            const customRotations = [-2, 1.5, -1];
            const rotation = customRotations[index % customRotations.length];

            return (
              <div key={item.id} className="relative pt-4">
                <StickyNote
                  color={item.noteColor}
                  rotation={rotation}
                  className="h-full min-h-[220px] flex flex-col justify-between"
                  hasTape={true}
                >
                  <div className="space-y-4">
                    {/* Note header display */}
                    <div className="flex items-center justify-between border-b border-wood-light/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 px-1.5 rounded-sm bg-stone-800/5">
                          {iconMap[item.icon as "📰" | "🗂️" | "🎤"] || <span>📝</span>}
                        </span>
                        <span className="font-mono text-[10px] tracking-wider uppercase opacity-85">
                          {item.role}
                        </span>
                      </div>
                      <Quote className="w-3 h-3 opacity-30 select-none shrink-0" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-base">
                        {item.title}
                      </h4>
                      <p className="font-body text-sm leading-relaxed opacity-90">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Tactile handwriting margin highlight */}
                  <div className="pt-4 border-t border-wood-light/5 text-[9px] font-mono tracking-widest uppercase opacity-60 text-right">
                    ✏️ ACTIVE PURSUIT
                  </div>
                </StickyNote>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
