import React from "react";
import { motion } from "motion/react";
import { FolderKanban, ArrowUpRight, FolderOpen, Code } from "lucide-react";
import { projects } from "../../data";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";
import TagPill from "../ui/TagPill";

export default function ProjectsSection() {
  // Border colors matching the card color theme
  const accentBorders = {
    amber: "border-l-4 border-l-amber ring-amber/5",
    green: "border-l-4 border-l-sage ring-sage/5",
    blue: "border-l-4 border-l-blue-accent ring-blue-accent/5",
  };

  const accentIcons = {
    amber: "bg-amber/5 text-amber",
    green: "bg-sage/10 text-sage",
    blue: "bg-blue-accent/10 text-blue-accent",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="projects" className="py-20 bg-paper/10 border-t border-wood-light/10 relative paper-grain">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Section Title */}
        <div className="space-y-4">
          <SectionTag icon="🔨">Craftsman Workspace</SectionTag>
          <SectionTitle
            title="Things I've Built"
            subtext="Each folder represents a completed project where I solved a technical gap, worked with real user requirements, or integrated custom workflows."
          />
        </div>

        {/* Dynamic Project Grid styled like horizontal file folders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className={`bg-card-warm border border-wood-light/25 rounded-md shadow-xs overflow-hidden flex flex-col justify-between relative group hover:border-wood-light/45 hover:shadow-md ${
                accentBorders[project.accent]
              }`}
            >
              {/* Folder tab folder-like shape at the top */}
              <div className="absolute top-0 right-0 py-1.5 px-3 rounded-bl-md bg-paper/40 border-l border-b border-wood-light/10 text-[10px] font-mono font-medium text-ink-muted select-none">
                📁 {project.year}
              </div>

              {/* Card Body */}
              <div className="p-6 pt-8 space-y-4 flex-grow">
                {/* Visual Icon Badge */}
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-sm ${accentIcons[project.accent]}`}>
                    <FolderOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-ink-muted block leading-none">
                      {project.role.split(" & ")[0]}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-wood-dark tracking-tight mt-1 group-hover:text-wood-dark">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="font-body text-base text-ink-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Tags and dynamic actions */}
              <div className="p-6 border-t border-wood-light/5 bg-paper/10 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <TagPill key={tag} size="sm">
                      {tag}
                    </TagPill>
                  ))}
                </div>

                {/* Simulated physical note link inside the tab */}
                <div className="flex items-center justify-between text-xs text-ink-muted font-mono pt-1">
                  <span className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" /> COMPLETED TASK
                  </span>
                  <span className="text-wood-dark group-hover:text-amber transition-colors flex items-center gap-0.5 font-sans font-medium hover:underline cursor-default">
                    Index Folder <Code className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
