"use client";

import { motion } from "framer-motion";

interface TechSectionProps {
  technologies: string[];
  gradient: string;
}

export function TechSection({ technologies, gradient }: TechSectionProps) {
  return (
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
        {technologies.map((tech, index) => (
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
  );
}
