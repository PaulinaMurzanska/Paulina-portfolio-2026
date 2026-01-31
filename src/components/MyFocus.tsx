"use client";

import { motion } from "framer-motion";
import aboutData from "@/data/data.json";

const about = aboutData.about;

export function MyFocus() {
  return (
    <section className="py-16 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Focus</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            The principles that guide my work and approach to development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Code Quality & Performance */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-[var(--accent-1)]">
              <svg className="w-7 h-7 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">{about.values[0]?.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm">{about.values[0]?.description}</p>
          </motion.div>

          {/* AI-Augmented Development - EMPHASIZED CENTER */}
          <motion.div
            className="bg-gradient-to-br from-[#7c3aed] to-[#db2777] rounded-2xl p-6 pt-8 shadow-xl text-center md:-mt-4 md:mb-4 relative overflow-visible"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-[#7c3aed] shadow-md uppercase tracking-wide">
                Current Focus
              </span>
            </div>
            <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-white/20">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{about.values[1]?.title}</h3>
            <p className="text-white/90 text-sm">{about.values[1]?.description}</p>
          </motion.div>

          {/* User-Centered Delivery */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-[var(--accent-4)]">
              <svg className="w-7 h-7 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">{about.values[2]?.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm">{about.values[2]?.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
