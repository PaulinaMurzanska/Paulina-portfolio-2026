"use client";

import { motion } from "framer-motion";

// Animation variants for staggered content reveal
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export function HeroContent() {
  return (
    <div>
      {/* Badge */}
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent-1)] text-[var(--text-secondary)] text-sm font-medium mb-6">
          Front-end Developer
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi, I'm <span className="gradient-text">Paulina</span>
        <br />
        <motion.span
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I build digital
        </motion.span>
        <br />
        <UnderlinedText />
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-base md:text-xl text-[var(--text-secondary)] max-w-lg mb-6 md:mb-8 leading-relaxed"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        4+ years crafting modern web applications with React, TypeScript & Next.js
        for enterprise clients across the US & UK.
      </motion.p>

      {/* CTA Buttons */}
      <CallToActionButtons />
    </div>
  );
}

// Underlined "experiences" text with animated SVG
function UnderlinedText() {
  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      experiences
      <motion.svg
        className="absolute -bottom-2 left-0 w-full"
        viewBox="0 0 200 12"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.path
          d="M0 6 Q50 0, 100 6 T200 6"
          fill="none"
          stroke="url(#hero-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.span>
  );
}

// CTA buttons component
function CallToActionButtons() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex flex-wrap gap-3 md:gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <a
        href="#timeline"
        onClick={(e) => handleClick(e, "#timeline")}
        className="px-5 py-3 md:px-8 md:py-4 rounded-full bg-[var(--text-primary)] text-white font-medium text-sm md:text-base hover:scale-105 active:scale-98 hover:shadow-lg transition-all duration-300"
      >
        View My Journey
      </a>
      <a
        href="#contact"
        onClick={(e) => handleClick(e, "#contact")}
        className="px-5 py-3 md:px-8 md:py-4 rounded-full border-2 border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-sm md:text-base gradient-border hover:scale-105 active:scale-98 hover:shadow-lg transition-all duration-300"
      >
        Get in Touch
      </a>
    </motion.div>
  );
}
