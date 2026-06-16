import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

export default function SectionTag({ children, icon = "🌿", className = "" }: SectionTagProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper/50 border border-wood-light/10 text-wood-dark font-mono text-xs tracking-wider uppercase select-none ${className}`}>
      <span>{icon}</span>
      <span>{children}</span>
    </div>
  );
}
