"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import experienceData from "@/data/data.json";
import { SectionHeader } from "../atoms";
import { ProjectCard } from "./ProjectCard";
import { ProjectItem } from "@/types";

const allProjects: ProjectItem[] = [...experienceData.experienceTimeline].sort(
  (a, b) => a.showcaseOrder - b.showcaseOrder
);

const CARDS_PER_VIEW = 3;

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(allProjects.length / CARDS_PER_VIEW);
  const maxIndex = Math.max(0, allProjects.length - CARDS_PER_VIEW);
  const visibleProjects = allProjects.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goToSlide = (index: number) => setCurrentIndex(Math.min(index * CARDS_PER_VIEW, maxIndex));

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <BackgroundDecoration />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeader
          badge="Portfolio"
          badgeColor="accent-3"
          title="Project"
          gradientWord="Showcase"
          subtitle="Explore detailed case studies of my professional and personal projects"
          className="mb-20"
        />

        <div className="relative">
          <SliderNavigation
            currentIndex={currentIndex}
            maxIndex={maxIndex}
            totalProjects={allProjects.length}
            cardsPerView={CARDS_PER_VIEW}
            onPrev={prevSlide}
            onNext={nextSlide}
          />

          <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-4" layout>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredId === project.id}
                  onHover={setHoveredId}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <PaginationDots
            totalSlides={totalSlides}
            currentIndex={currentIndex}
            maxIndex={maxIndex}
            cardsPerView={CARDS_PER_VIEW}
            onGoToSlide={goToSlide}
          />
        </div>

        <motion.p
          className="text-center text-[var(--text-muted)] text-sm mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Click on any project to explore the full case study with challenges, solutions, and impact.
        </motion.p>
      </div>
    </section>
  );
}

function BackgroundDecoration() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
      style={{ background: "var(--gradient-1)" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />
  );
}

interface SliderNavigationProps {
  currentIndex: number;
  maxIndex: number;
  totalProjects: number;
  cardsPerView: number;
  onPrev: () => void;
  onNext: () => void;
}

function SliderNavigation({ currentIndex, maxIndex, totalProjects, cardsPerView, onPrev, onNext }: SliderNavigationProps) {
  if (totalProjects <= cardsPerView) return null;

  return (
    <>
      <motion.button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className={`absolute -left-2 md:-left-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center transition-all ${
          currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)] hover:scale-110"
        }`}
        whileHover={currentIndex !== 0 ? { scale: 1.1 } : {}}
        whileTap={currentIndex !== 0 ? { scale: 0.95 } : {}}
      >
        <svg className="w-7 h-7 md:w-6 md:h-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={onNext}
        disabled={currentIndex >= maxIndex}
        className={`absolute -right-2 md:-right-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center transition-all ${
          currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : "hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)] hover:scale-110"
        }`}
        whileHover={currentIndex < maxIndex ? { scale: 1.1 } : {}}
        whileTap={currentIndex < maxIndex ? { scale: 0.95 } : {}}
      >
        <svg className="w-7 h-7 md:w-6 md:h-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </>
  );
}

interface PaginationDotsProps {
  totalSlides: number;
  currentIndex: number;
  maxIndex: number;
  cardsPerView: number;
  onGoToSlide: (index: number) => void;
}

function PaginationDots({ totalSlides, currentIndex, maxIndex, cardsPerView, onGoToSlide }: PaginationDotsProps) {
  if (totalSlides <= 1) return null;

  return (
    <motion.div
      className="flex justify-center gap-3 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = Math.floor(currentIndex / cardsPerView) === index ||
          (index === totalSlides - 1 && currentIndex >= maxIndex);
        return (
          <motion.button
            key={index}
            onClick={() => onGoToSlide(index)}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              background: isActive ? "var(--accent-1)" : "var(--bg-secondary)",
              transform: isActive ? "scale(1.5)" : "scale(1)",
            }}
            whileHover={{ scale: 1.5 }}
          />
        );
      })}
    </motion.div>
  );
}
