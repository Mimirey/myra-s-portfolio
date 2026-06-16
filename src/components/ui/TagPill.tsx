import React, { useMemo } from "react";
import { motion } from "motion/react";

interface TagPillProps {
  children: string;
  size?: "sm" | "md";
  className?: string;
  key?: any;
}

export default function TagPill({ children, size = "md", className = "" }: TagPillProps) {
  // Generate a random stable rotation per tag based on name to keep layout consistent but organic
  const rotation = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < children.length; i++) {
      hash = children.charCodeAt(i) + ((hash << 5) - hash);
    }
    const degrees = (hash % 60) / 15 - 2; // Returns a value between -2 and +2
    return degrees;
  }, [children]);

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px] md:text-xs",
    md: "px-3 py-1 text-xs md:text-sm"
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -1, rotate: 0 }}
      style={{ rotate: `${rotation}deg` }}
      className={`inline-block font-mono bg-card-warm hover:bg-[#FAF6F0] text-ink-light border border-wood-light/20 rounded-full transition-colors duration-200 select-none ${sizeClasses[size]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
