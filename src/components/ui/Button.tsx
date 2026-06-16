import React from "react";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "tape";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyle = "px-5 py-2.5 rounded-sm font-sans font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wood-mid/40 relative cursor-pointer select-none inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-wood-dark hover:bg-[#523A26] text-cream border border-wood-dark shadow-sm",
    secondary: "bg-white hover:bg-[#FAF6F0] text-wood-dark border border-wood-light/30 shadow-xs",
    ghost: "bg-transparent text-wood-dark hover:bg-wood-light/10 hover:text-wood-dark",
    tape: "bg-[#FFF9E6] hover:bg-[#FFF2E6] text-[#4A3B18] border border-[#F2E5C1] shadow-xs before:content-[''] before:absolute before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:w-10 before:h-2.5 before:bg-[#E6D4AA]/50 before:transform before:rotate-1"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
