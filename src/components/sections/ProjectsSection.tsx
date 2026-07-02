import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderOpen, Code, Github, Play, X, Lock } from "lucide-react";
import { projects } from "../../data";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";
import TagPill from "../ui/TagPill";


export default function ProjectsSection() {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  const accentBorders = {
    amber: "border-l-4 border-l-amber ring-amber/5",
    green: "border-l-4 border-l-sage ring-sage/5",
    blue: "border-l-4 border-l-blue-accent ring-blue-accent/5",
    purple: "border-l-4 border-l-purple-accent ring-purple-accent/5",
  };

  const accentIcons = {
    amber: "bg-amber/5 text-amber",
    green: "bg-sage/10 text-sage",
    blue: "bg-blue-accent/10 text-blue-accent",
    purple: "bg-purple-accent/10 text-purple-accent",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="projects" className="py-20 bg-paper/10 border-t border-wood-light/10 relative paper-grain">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-4">
          <SectionTag icon="🔨">Craftsman Workspace</SectionTag>
          <SectionTitle
            title="Things I've Built"
            subtext="Each folder represents a completed project where I solved a technical gap, worked with real user requirements, or integrated custom workflows."
          />
        </div>

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
              {/* Folder tab top-right: year + demo badge */}
              <div className="absolute top-0 right-0 flex items-center gap-1.5">
                {project.videoUrl && (
                  <span className="py-1.5 px-2.5 rounded-bl-md bg-amber/10 border-l border-b border-wood-light/10 text-[10px] font-mono font-medium text-wood-dark select-none flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 fill-current" /> DEMO
                  </span>
                )}
                <span className="py-1.5 px-3 rounded-bl-md bg-paper/40 border-l border-b border-wood-light/10 text-[10px] font-mono font-medium text-ink-muted select-none">
                  📁 {project.year}
                </span>
              </div>

              <div className="p-6 pt-8 space-y-4 flex-grow">
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

              <div className="p-6 border-t border-wood-light/5 bg-paper/10 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <TagPill key={tag} size="sm">
                      {tag}
                    </TagPill>
                  ))}
                </div>

                {/* Action row: repo link + optional video trigger */}
                <div className="flex items-center justify-between text-xs text-ink-muted font-mono pt-1">
                  <span className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" /> COMPLETED TASK
                  </span>

                  <div className="flex items-center gap-3">
                    {project.videoUrl && (
                      <button
                        onClick={() => setActiveVideo({ url: project.videoUrl!, title: project.title })}
                        className="text-wood-dark hover:text-amber transition-colors flex items-center gap-1 font-sans font-medium hover:underline"
                      >
                        <Play className="w-3.5 h-3.5" /> Watch
                      </button>
                    )}

                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-wood-dark hover:text-amber transition-colors flex items-center gap-1 font-sans font-medium hover:underline"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    ) : (
                      <span
                        className="text-ink-muted/60 flex items-center gap-1 font-sans font-medium cursor-default"
                        title={project.repoNote || "Repository not publicly available"}
                      >
                        <Lock className="w-3.5 h-3.5" /> {project.repoNote ?? "Private"}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-wood-dark/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card-warm border border-wood-light/25 rounded-md shadow-lg max-w-3xl w-full overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-wood-light/10 bg-paper/20">
                <span className="font-display text-sm font-semibold text-wood-dark">
                  🎬 {activeVideo.title}
                </span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-ink-muted hover:text-wood-dark transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}