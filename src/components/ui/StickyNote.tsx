import React from "react";
import { motion } from "motion/react";

interface StickyNoteProps {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue" | "green" | "amber";
  rotation?: number; // degrees
  className?: string;
  hasTape?: boolean;
}

export default function StickyNote({
  children,
  color = "yellow",
  rotation,
  className = "",
  hasTape = true,
}: StickyNoteProps) {
  // Color presets matching the cozy desk theme
  const colorMap = {
    yellow: "bg-[#FFF9E6] border-[#F2E5C1] text-[#4A3B18]",
    pink: "bg-[#FFEBF3] border-[#F2D1E1] text-[#4A1D33]",
    blue: "bg-[#E6F0FA] border-[#C1DBF2] text-[#18354A]",
    green: "bg-[#EBF7EB] border-[#D1ECD1] text-[#1D4A1D]",
    amber: "bg-[#FFF2E6] border-[#F2DAC1] text-[#4A2D18]",
  };

  const tapeColors = {
    yellow: "bg-[#E6D4AA]/60",
    pink: "bg-[#E6BACB]/60",
    blue: "bg-[#AAC2E6]/60",
    green: "bg-[#B5E6B5]/60",
    amber: "bg-[#E6C0A0]/60",
  };

  // Generate a random stable rotation if not provided
  const randomRotate = rotation !== undefined ? rotation : (Math.random() * 6 - 3);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotate: randomRotate - 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: randomRotate }}
      whileHover={{ scale: 1.03, rotate: randomRotate * 0.5, y: -4 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      style={{ transformOrigin: "center top" }}
      className={`relative p-6 border shadow-sm rounded-sm ${colorMap[color]} ${className}`}
    >
      {/* Tape decoration at the top center */}
      {hasTape && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 transform -rotate-1 shadow-xs border border-white/20 px-2 py-0.5 ${tapeColors[color]} flex items-center justify-between pointer-events-none backdrop-blur-[1px]`}
          style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
        >
          {/* Subtle jagged edge for torn tape effect */}
          <div className="absolute top-0 bottom-0 left-0 w-1 flex flex-col justify-between">
            <div className="w-1 h-0.5 bg-neutral-900/10"></div>
          </div>
        </div>
      )}

      {/* Note content */}
      <div className="relative font-body z-10 text-base leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
