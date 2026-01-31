"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AccentColor = "accent-1" | "accent-2" | "accent-3" | "accent-4";

interface SectionBadgeProps {
  children: ReactNode;
  color?: AccentColor;
  className?: string;
}

export function SectionBadge({ children, color = "accent-1", className = "" }: SectionBadgeProps) {
  return (
    <motion.span
      className={`inline-block px-4 py-2 rounded-full bg-[var(--${color})] text-[var(--text-secondary)] text-sm font-medium mb-4 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  );
}
