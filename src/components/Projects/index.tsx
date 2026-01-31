"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import experienceData from "@/data/data.json";
import { SectionHeader } from "../atoms";
import { ProjectItem } from "@/types";
import { getCompanyColors } from "@/data/companyColors";

const allProjects: ProjectItem[] = [...experienceData.experienceTimeline].sort(
  (a, b) => a.showcaseOrder - b.showcaseOrder
);

const CARDS_PER_VIEW = 3;

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(allProjects.length / CARDS_PER_VIEW);
  const maxIndex = Math.max(0, allProjects.length - CARDS_PER_VIEW);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index * CARDS_PER_VIEW, maxIndex));
  };

  const visibleProjects = allProjects.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

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
          {allProjects.length > CARDS_PER_VIEW && (
            <>
              <motion.button
                onClick={prevSlide}
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
                onClick={nextSlide}
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
          )}

          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const { color, gradient } = getCompanyColors(project.company);

                return (
                  <motion.div
                    key={project.id}
                    id={`showcase-${project.id}`}
                    className="group relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    layout
                  >
                    <Link href={`/projects/${project.id}?from=projects`}>
                      <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-lg h-full relative cursor-pointer"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div
                          className="h-48 relative overflow-hidden"
                          style={{ background: gradient }}
                        >
                          {project.projectLogo && (
                            <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center p-2">
                              <img
                                src={project.projectLogo}
                                alt={`${project.company} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}

                          {project.isPersonal && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                              Personal Project
                            </div>
                          )}

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
                            <motion.span
                              className="text-white/20 select-none uppercase text-center"
                              style={{
                                fontFamily: "var(--font-display), sans-serif",
                                fontSize: "2.5rem",
                                fontWeight: 400,
                                letterSpacing: "0.1em",
                              }}
                              animate={hoveredId === project.id ? { scale: 1.05 } : { scale: 1 }}
                              transition={{ duration: 0.4 }}
                            >
                              {project.company}
                            </motion.span>
                          </div>

                          {hoveredId === project.id && (
                            <>
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-2 h-2 bg-white/40 rounded-full"
                                  initial={{
                                    x: Math.random() * 100,
                                    y: 200,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    y: -50,
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                  }}
                                  style={{ left: `${20 + i * 15}%` }}
                                />
                              ))}
                            </>
                          )}

                          <motion.div
                            className="absolute bottom-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                            initial={{ opacity: 0, x: 20 }}
                            animate={hoveredId === project.id ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                          >
                            View Details →
                          </motion.div>
                        </div>

                        <div className="p-8">
                          <div className="flex items-center gap-2 mb-2">
                            <h3
                              className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text transition-all"
                              style={
                                hoveredId === project.id
                                  ? { backgroundImage: gradient, WebkitBackgroundClip: "text" }
                                  : {}
                              }
                            >
                              {project.company}
                            </h3>
                          </div>
                          <p className="text-[var(--accent-1)] text-sm font-medium mb-1">{project.role}</p>
                          <p className="text-[var(--text-muted)] text-sm mb-3">{project.project}</p>
                          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed line-clamp-2">
                            {project.shortDescription}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1 rounded-full text-sm text-white"
                                style={{ background: color }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: techIndex * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="px-3 py-1 rounded-full text-sm bg-[var(--bg-secondary)] text-[var(--text-muted)]">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        <motion.div
                          className="absolute inset-0 rounded-3xl pointer-events-none"
                          style={{
                            padding: "2px",
                            background: gradient,
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {totalSlides > 1 && (
            <motion.div
              className="flex justify-center gap-3 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {Array.from({ length: totalSlides }).map((_, index) => {
                const isActive = Math.floor(currentIndex / CARDS_PER_VIEW) === index ||
                  (index === totalSlides - 1 && currentIndex >= maxIndex);
                return (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
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
          )}
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
