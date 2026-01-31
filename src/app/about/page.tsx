"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import aboutData from "@/data/data.json";
import { Navigation, FunFacts, MyFocus } from "@/components";

const about = aboutData.about;

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[var(--accent-1)] opacity-20 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[var(--accent-3)] opacity-20 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                {about.intro}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Career Transition - FIRST */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
            <motion.div
              className="bg-gradient-to-br from-[#3b82f6]/10 to-[#06b6d4]/10 rounded-3xl p-8 md:p-12 shadow-lg border border-[#3b82f6]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-[var(--accent-2)] uppercase tracking-wider">Career Change</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-1">{about.journey.title}</h2>
                </div>
              </div>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                {about.journey.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {about.journey.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--text-primary)]">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <MyFocus />

        {/* Previous Career - Hotel Industry */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#db2777] flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-[var(--accent-1)] uppercase tracking-wider">Previous Career</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-1">{about.previousCareer.title}</h2>
                </div>
              </div>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                {about.previousCareer.description}
              </p>

              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {about.previousCareer.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--text-primary)]">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Transferable Skills</h3>
              <div className="flex flex-wrap gap-3">
                {about.previousCareer.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-[var(--text-primary)] shadow-sm border border-[#7c3aed]/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Education & <span className="gradient-text">Learning</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {about.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `var(--accent-${(index % 4) + 1})` }}
                    >
                      {edu.type === "degree" ? (
                        <svg className="w-6 h-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold">{edu.title}</h3>
                        <span className="text-sm text-[var(--text-muted)]">{edu.year}</span>
                      </div>
                      <p className="text-[var(--accent-1)] font-medium mb-2">{edu.institution}</p>
                      <p className="text-[var(--text-secondary)]">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts / Free Time Section */}
        <FunFacts />

        {/* CTA */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                I bring both technical expertise and years of leadership experience to every project.
              </p>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white font-medium text-lg hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-[var(--text-muted)] text-sm">
        <p>2026 · Crafted with Next.js & Framer Motion</p>
      </footer>
    </>
  );
}
