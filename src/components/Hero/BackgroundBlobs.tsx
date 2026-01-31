"use client";

import { motion } from "framer-motion";

// Animation configurations for the background blobs
const BLOB_CONFIG = [
  {
    className: "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--accent-1)] opacity-50 blur-3xl",
    animate: { x: [0, 50, 0], scale: [1, 1.1, 1] },
    duration: 15,
  },
  {
    className: "absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--accent-2)] opacity-50 blur-3xl",
    animate: { x: [0, -30, 0], scale: [1, 1.15, 1] },
    duration: 18,
  },
  {
    className: "absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-[var(--accent-3)] opacity-40 blur-3xl",
    animate: { x: [0, 40, 0] },
    duration: 12,
  },
];

export function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {BLOB_CONFIG.map((blob, index) => (
        <motion.div
          key={index}
          className={blob.className}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
