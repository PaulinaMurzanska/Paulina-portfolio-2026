"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "./atoms";

// Outdoor activity images
const outdoorImages = [
  "/images/fun-facts/IMG20250817121021.jpg",
  "/images/fun-facts/IMG20250817121248.jpg",
  "/images/fun-facts/IMG20250921140140.jpg",
  "/images/fun-facts/IMG20251222130526.jpg",
  "/images/fun-facts/IMG20251229144616.jpg",
  "/images/fun-facts/IMG20251229153018.jpg",
];

const activities = [
  { name: "Skiing", icon: "⛷️" },
  { name: "Rollerskating", icon: "🛼" },
  { name: "Biking", icon: "🚴" },
  { name: "Stand-up Paddleboard", icon: "🏄" },
];

export function FunFacts() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % outdoorImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % outdoorImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + outdoorImages.length) % outdoorImages.length);
  };

  return (
    <section id="fun-facts" className="py-32 relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[var(--accent-1)] opacity-10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--accent-3)] opacity-10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <SectionHeader
          badge="Beyond the Code"
          badgeColor="accent-1"
          title="Free"
          gradientWord="Time"
          subtitle="When I'm not coding, you can find me enjoying the outdoors"
        />

        {/* Outdoors Card with Image Slider */}
        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Slider */}
            <div className="relative h-[300px] md:h-[450px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={outdoorImages[currentImage]}
                    alt={`Outdoor activity ${currentImage + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {outdoorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl"
                  style={{ background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" }}
                >
                  🌲
                </div>
                <h3 className="text-xl md:text-3xl font-bold">Outdoors</h3>
              </div>

              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                I love spending my free time outdoors, staying active and exploring nature.
                Whether it's hitting the slopes, cruising on wheels, or paddling on water —
                being outside is where I recharge.
              </p>

              {/* Activity tags */}
              <div className="flex flex-wrap gap-3">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.name}
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{activity.icon}</span>
                    <span className="text-[var(--text-primary)] font-medium">{activity.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
