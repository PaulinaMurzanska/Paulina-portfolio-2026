"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SectionBadge } from "./SectionBadge";

type AccentColor = "accent-1" | "accent-2" | "accent-3" | "accent-4";

interface SectionHeaderProps {
  badge?: string;
  badgeColor?: AccentColor;
  title: string;
  gradientWord: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  badge,
  badgeColor = "accent-1",
  title,
  gradientWord,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {badge && <SectionBadge color={badgeColor}>{badge}</SectionBadge>}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
        {title} <span className="gradient-text">{gradientWord}</span>
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
