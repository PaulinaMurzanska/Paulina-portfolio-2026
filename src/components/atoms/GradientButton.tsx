"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface GradientButtonProps {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function GradientButton({
  href,
  children,
  size = "md",
  external = false,
  icon,
  className = "",
}: GradientButtonProps) {
  const buttonClasses = `inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white font-medium hover:shadow-lg transition-all duration-300 ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    </motion.div>
  );
}
