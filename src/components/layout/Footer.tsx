import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-paper/30 border-t border-wood-light/10 py-8 text-center select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Monogram credits */}
        <p className="font-display font-medium text-wood-dark italic text-base">
           Myra Isadora<span className="text-amber">.</span>
        </p>

        {/* Informational signature - humble, descriptive, anti-slop */}
        <p className="font-mono text-xs text-ink-muted flex items-center gap-1">
          <span>Open notebook edition</span>
          <span>•</span>
          <span>Handcrafted with React, Tailwind v4, &amp;</span>
          <Heart className="w-3 h-3 text-amber fill-amber animate-pulse" />
          <span>in 2026</span>
        </p>
      </div>
    </footer>
  );
}
