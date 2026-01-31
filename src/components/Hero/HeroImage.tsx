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

        {/* Profile photo */}
        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] lg:w-[540px] lg:h-[540px] rounded-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top scale-150 lg:scale-110 origin-top"
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

