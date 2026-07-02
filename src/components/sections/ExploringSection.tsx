import React from "react";
import { motion } from "motion/react";
import { BookOpen, Headphones, Wrench, Sprout, MessagesSquare } from "lucide-react";
import SectionTag from "../ui/SectionTag";
import TagPill from "../ui/TagPill";

export default function ExploringSection() {
  const deskCategories = [
    {
      key: "reading",
      label: "Reading",
      icon: BookOpen,
      rotate: "-rotate-1",
      items: ["Clean Architecture", "Designing Data-Intensive Applications"],
    },
    {
      key: "listening",
      label: "Listening",
      icon: Headphones,
      rotate: "rotate-1",
      items: ["Tech Podcasts", "English Presentations"],
    },
    {
      key: "building",
      label: "Building",
      icon: Wrench,
      rotate: "-rotate-2",
      items: ["Flutter", "AWS", "Portfolio"],
    },
    {
      key: "learning",
      label: "Learning",
      icon: Sprout,
      rotate: "rotate-2",
      items: ["CI/CD", "Docker", "System Design"],
    },
    {
      key: "practicing",
      label: "Practicing",
      icon: MessagesSquare,
      rotate: "-rotate-1",
      items: ["Public Speaking", "Client Communication"],
    },
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-6 text-center select-none relative">

      <div className="space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2">
          <SectionTag icon="🧭">Currently Exploring</SectionTag>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-wood-dark leading-tight italic">
            "What's Currently On My Desk?"
          </h3>
          <p className="font-body text-base md:text-lg text-ink-light max-w-xl mx-auto leading-relaxed">
            I've never been the type to stay in just one lane. I enjoy picking
            up unfamiliar skills and seeing where they take me.
            (Who gets to decide where my limit is? I'd rather find out for myself.)
          </p>
        </div>

        {/* Categorized Sticky Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto pt-6 text-left">
          {deskCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-[#E9A03B] border border-wood-light/25 rounded-md shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all p-4 ${cat.rotate}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-wood-dark shrink-0" />
                  <span className="font-display text-sm font-semibold text-wood-dark tracking-wide">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <TagPill
                      key={item}
                      size="sm"
                      className="py-1 px-2.5 bg-[#FAF6F0] border border-wood-light/20 rounded-sm hover:bg-white shadow-2xs text-xs"
                    >
                      {item}
                    </TagPill>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="font-mono text-xs text-ink-muted pt-2">
          Updated quarterly • Checked out from local training centers
        </p>
      </div>
    </section>
  );
}