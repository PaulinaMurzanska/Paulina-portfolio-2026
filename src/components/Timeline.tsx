"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import experienceData from "@/data/data.json";
import { SectionHeader } from "./atoms";
import { ProjectItem } from "@/types";
import { getCompanyColors } from "@/data/companyColors";
import { formatDateRange } from "@/utils";

const experiences: ProjectItem[] = experienceData.experienceTimeline;

const sortedExperiences = [...experiences]
  .filter((item) => !item.isPersonal)
  .sort((a, b) => {
    // Current/present jobs come first
    const aIsCurrent = a.endDate === "present";
    const bIsCurrent = b.endDate === "present";
    if (aIsCurrent && !bIsCurrent) return -1;
    if (!aIsCurrent && bIsCurrent) return 1;
    // Then sort by start date descending (most recent first)
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-32 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[var(--accent-1)] opacity-20 blur-3xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[var(--accent-3)] opacity-20 blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <SectionHeader
          badge="My Journey"
          badgeColor="accent-2"
          title="Career"
          gradientWord="Timeline"
          className="mb-20"
        />

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[var(--bg-secondary)] -translate-x-1/2 hidden md:block">
            <motion.div className="w-full timeline-line origin-top" style={{ height: lineHeight }} />
          </div>

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {sortedExperiences.map((item, index) => {
              const { color } = getCompanyColors(item.company);

              return (
                <motion.div
                  key={item.id}
                  id={`project-${item.id}`}
                  className={`relative flex flex-col md:flex-row items-center gap-8 scroll-mt-[150px] ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onViewportEnter={() => setActiveIndex(index)}
                >
                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden"
                      style={{ borderTop: `4px solid ${color}` }}
                    >
                      {/* Decorative background */}
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                        style={{ background: color }}
                      />

                      <div className="relative z-10">
                        {/* Logo + Date/location - stacked on mobile, row on md+ */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
                          {/* Logo - shown first on mobile */}
                          {item.projectLogo && (
                            <img
                              src={item.projectLogo}
                              alt={`${item.company} logo`}
                              className="h-10 md:h-12 w-auto object-contain max-w-[100px] md:max-w-[120px] order-first md:order-last flex-shrink-0"
                            />
                          )}
                          {/* Date and location */}
                          <div className="flex flex-col">
                            <span
                              className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold w-fit text-white"
                              style={{ background: color }}
                            >
                              {formatDateRange(item.startDate, item.endDate)}
                            </span>
                            <span className="text-[var(--text-muted)] text-xs mt-1 pl-1">{item.location}</span>
                          </div>
                        </div>

                        {/* Company name */}
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{item.company}</h3>

                        <p className="text-[var(--accent-1)] font-medium mb-2">{item.role}</p>
                        <p className="text-[var(--text-secondary)] text-sm mb-4">{item.project}</p>
                        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{item.shortDescription}</p>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 5).map((tech) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 bg-[var(--bg-secondary)] rounded-full text-sm text-[var(--text-secondary)]"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {item.technologies.length > 5 && (
                            <span className="px-3 py-1 bg-[var(--bg-secondary)] rounded-full text-sm text-[var(--text-muted)]">
                              +{item.technologies.length - 5}
                            </span>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-3 mt-8">
                          {/* View Details - links to project page */}
                          <Link
                            href={`/projects/${item.id}?from=project-${item.id}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105"
                            style={{ borderColor: color, color: color, backgroundColor: "transparent" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = color;
                              e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "transparent";
                              e.currentTarget.style.color = color;
                            }}
                          >
                            View Details
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>

                          {/* Visit Project - external link if public */}
                          {item.url ? (
                            <motion.a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 shadow-md hover:shadow-lg transition-all duration-300"
                              style={{ backgroundColor: color, borderColor: color, color: "#fff" }}
                              whileHover={{ scale: 1.05 }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = color;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = color;
                                e.currentTarget.style.color = "#fff";
                              }}
                            >
                              Visit Project
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </motion.a>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] italic">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                              Internal project
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <motion.div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 items-center justify-center"
                    style={{ background: color }}
                    animate={activeIndex === index ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white"
                      animate={activeIndex === index ? { scale: [1, 0, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Company logo or name (opposite side) */}
                  <div
                    className={`hidden md:flex flex-1 ${index % 2 === 0 ? "md:pl-16 justify-start" : "md:pr-16 justify-end"}`}
                  >
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.8 }} viewport={{ once: true }}>
                      {item.projectLogo ? (
                        <img
                          src={item.projectLogo}
                          alt={`${item.company} logo`}
                          className="object-contain"
                          style={{ width: "180px", height: "auto" }}
                        />
                      ) : (
                        <span className="text-5xl font-bold" style={{ color: color, opacity: 0.5 }}>
                          {item.company}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          className="flex justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {sortedExperiences.map((item, index) => (
            <motion.button
              key={item.id}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                background: activeIndex === index ? getCompanyColors(item.company).color : "var(--bg-secondary)",
                transform: activeIndex === index ? "scale(1.5)" : "scale(1)",
              }}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
