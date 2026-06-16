import React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtext?: string;
  className?: string;
}

export default function SectionTitle({ title, subtext, className = "" }: SectionTitleProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-wood-dark tracking-tight leading-tight relative inline-block group">
        <span className="relative z-10">{title}</span>
        {/* Wavy under-line drawing highlight */}
        <span className="absolute left-0 right-0 bottom-1 h-2 bg-wood-light/15 rounded-md transform -rotate-1 origin-left group-hover:bg-wood-light/25 transition-all duration-300"></span>
      </h2>
      {subtext && (
        <p className="font-body text-lg text-ink-light max-w-2xl leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}
