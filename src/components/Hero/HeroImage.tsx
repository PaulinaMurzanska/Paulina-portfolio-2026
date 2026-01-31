"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="relative">
        {/* Outer glow effect */}
        <GlowEffect />

        {/* Pulsing ring animation */}
        <PulsingRing />

        {/* Profile photo */}
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[540px] lg:h-[540px] rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

// Blurred glow behind the image
function GlowEffect() {
  return (
    <div className="absolute -inset-12 sm:-inset-16 md:-inset-20 lg:-inset-28 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#db2777] opacity-15 blur-3xl" />
  );
}

// Animated pulsing ring around the image
function PulsingRing() {
  return (
    <motion.div
      className="absolute -inset-10 sm:-inset-14 md:-inset-18 lg:-inset-24 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(219, 39, 119, 0.15) 40%, rgba(219, 39, 119, 0.05) 60%, transparent 80%)",
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
