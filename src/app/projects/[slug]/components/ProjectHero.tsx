"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { formatDateRange } from "@/utils";

interface ProjectHeroProps {
  project: ProjectItem;
  gradient: string;
  fromSection: string;
}

export function ProjectHero({ project, gradient, fromSection }: ProjectHeroProps) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: gradient }} />

      <CompanyWatermark company={project.company} />
      <BackButton fromSection={fromSection} />
      {project.url && <VisitProjectButton url={project.url} />}
      <HeroContent project={project} />
      <ScrollIndicator />
    </section>
  );
}

function CompanyWatermark({ company }: { company: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <motion.span
        className="font-[var(--font-display)] text-white/10 whitespace-nowrap select-none"
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(200px, 35vw, 500px)",
          fontWeight: 400,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {company}
      </motion.span>
    </div>
  );
}

function BackButton({ fromSection }: { fromSection: string }) {
  return (
    <motion.div
      className="absolute top-8 left-8 z-20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Link
        href={`/#${fromSection}`}
        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>
    </motion.div>
  );
}

function VisitProjectButton({ url }: { url: string }) {
  return (
    <motion.div
      className="absolute top-8 right-8 z-20"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
      >
        Visit Project
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </motion.div>
  );
}

function HeroContent({ project }: { project: ProjectItem }) {
  return (
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-center gap-4 mb-6 flex-wrap"
      >
        <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
          {formatDateRange(project.startDate, project.endDate)}
        </span>
        <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
          {project.location}
        </span>
        {project.isPersonal && (
          <span className="px-4 py-1 bg-gradient-to-r from-[#7c3aed] to-[#db2777] rounded-full text-sm font-semibold">
            Personal Project
          </span>
        )}
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {project.company}
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-white/90 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {project.role}
      </motion.p>

      <motion.p
        className="text-lg text-white/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {project.project}
      </motion.p>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  );
}
