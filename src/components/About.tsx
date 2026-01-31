"use client";

import { motion } from "framer-motion";
import aboutData from "@/data/data.json";
import { SectionHeader, GradientButton } from "./atoms";

const about = aboutData.about;

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[var(--accent-2)] opacity-20 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeader
          badge="About Me"
          badgeColor="accent-4"
          title="My"
          gradientWord="Story"
          className="mb-12"
        />

        {/* Compact Content Card */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Intro */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 text-center">
            {about.intro}
          </p>

          {/* Two Column Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Previous Career Highlight */}
            <div className="p-6 bg-gradient-to-br from-[#7c3aed]/10 to-[#db2777]/10 rounded-2xl border border-[#7c3aed]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#db2777] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">12+ Years in Hospitality</h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Senior management experience leading teams, managing operations, and delivering excellence at international properties.
              </p>
            </div>

            {/* Tech Journey Highlight */}
            <div className="p-6 bg-[var(--bg-secondary)] rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Career Transition to Tech</h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Leveraged leadership skills to excel in development, now working with international clients on enterprise projects.
              </p>
            </div>
          </div>

          {/* Key Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Team Leadership", "Problem Solving", "React", "TypeScript", "Next.js"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[var(--bg-secondary)] rounded-full text-sm font-medium text-[var(--text-secondary)]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="text-center">
            <GradientButton
              href="/about"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              Read my full story
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
