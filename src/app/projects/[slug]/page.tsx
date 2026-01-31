"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import experienceData from "@/data/data.json";

interface ProjectItem {
  id: string;
  company: string;
  project: string;
  visibility: string;
  url: string | null;
  location: string;
  startDate: string;
  endDate: string;
  role: string;
  shortDescription: string;
  longDescription: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  features: string[];
  projectImage: string;
  projectLogo: string | null;
  isPersonal: boolean;
  showcaseOrder: number;
}

const allProjects: ProjectItem[] = experienceData.experienceTimeline;

// Company brand colors (same as Timeline)
const companyColors: Record<string, { color: string; gradient: string }> = {
  "Sofomo": { color: "#1a1a1a", gradient: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)" },
  "TriplePoint": { color: "#3b6baa", gradient: "linear-gradient(135deg, #3b6baa 0%, #5a8bc8 100%)" },
  "FlexCare": { color: "#7a2048", gradient: "linear-gradient(135deg, #7a2048 0%, #a83058 100%)" },
  "Octopus": { color: "#1AB7FC", gradient: "linear-gradient(135deg, #1AB7FC 0%, #4dc9ff 100%)" },
  "IQAir": { color: "#d32f2f", gradient: "linear-gradient(135deg, #d32f2f 0%, #ef5350 100%)" },
  "Proprio": { color: "#6b5b95", gradient: "linear-gradient(135deg, #6b5b95 0%, #8b7bb5 100%)" },
  "BeautyLash": { color: "#d4af37", gradient: "linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)" },
  "AS Service": { color: "#c62828", gradient: "linear-gradient(135deg, #1a1a1a 0%, #c62828 100%)" },
};
const defaultColors = { color: "var(--accent-1)", gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)" };

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const startStr = start.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  if (endDate === "present") {
    return `${startStr} — Present`;
  }

  const end = new Date(endDate);
  const endStr = end.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${startStr} — ${endStr}`;
}

function getProjectById(id: string): ProjectItem | undefined {
  return allProjects.find((project) => project.id === id);
}

export default function ProjectPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const project = getProjectById(slug);
  const fromSection = searchParams.get("from") || "projects";

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.id === slug);
  const { color, gradient } = companyColors[project.company] || defaultColors;

  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{ background: gradient }}
        />

        {/* Large company name as background watermark */}
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
            {project.company}
          </motion.span>
        </div>

        {/* Back button */}
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

        {/* Visit Project button (if URL available) */}
        {project.url && (
          <motion.div
            className="absolute top-8 right-8 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={project.url}
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
        )}

        {/* Content */}
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Overview */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              {project.projectLogo && (
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center p-2 flex-shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <img
                    src={project.projectLogo}
                    alt={`${project.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <h2 className="text-3xl font-bold">Project Overview</h2>
            </div>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Challenge, Solution, Impact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: gradient }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: gradient }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">The Solution</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: gradient }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">The Impact</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.impact}
              </p>
            </motion.div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              className="mb-16 bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: gradient }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Key Features & Deliverables</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-4 p-4 bg-[var(--bg-secondary)] rounded-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white">
                      <svg className="w-5 h-5 text-[var(--accent-1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--text-primary)] font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
                  style={{ background: gradient }}
                  whileHover={{ scale: 1.05 }}
                >
                  Visit Live Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
              {!project.url && project.visibility === "internal" && (
                <div className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--text-muted)] italic">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Internal project — not publicly accessible
                </div>
              )}
            </motion.div>
          )}

          {/* Key Achievements */}
          <motion.div
            className="mb-16 bg-white rounded-3xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: gradient }}
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Key Technologies & Skills Applied</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="flex items-center gap-4 p-4 bg-[var(--bg-secondary)] rounded-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white">
                    <svg className="w-5 h-5 text-[var(--accent-1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--text-primary)] font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-between items-center pt-8 border-t border-[var(--bg-secondary)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <span className="text-sm text-[var(--text-muted)]">Previous</span>
                  <p className="font-medium">{prevProject.company}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex items-center gap-3 text-right text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <div>
                  <span className="text-sm text-[var(--text-muted)]">Next</span>
                  <p className="font-medium">{nextProject.company}</p>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Interested in working together?
          </motion.h2>
          <motion.p
            className="text-[var(--text-secondary)] mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I'm always open to discussing new projects and opportunities.
          </motion.p>
          <motion.a
            href="/#contact"
            className="inline-flex px-8 py-4 rounded-full font-medium text-white"
            style={{ background: gradient }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </main>
  );
}
