"use client";

import { motion } from "framer-motion";

interface FeaturesSectionProps {
  features: string[];
  gradient: string;
  url: string | null;
  visibility: string;
}

export function FeaturesSection({ features, gradient, url, visibility }: FeaturesSectionProps) {
  if (!features || features.length === 0) return null;

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">Key Features & Deliverables</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
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

      {url && (
        <motion.a
          href={url}
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

      {!url && visibility === "internal" && (
        <div className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--text-muted)] italic">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Internal project — not publicly accessible
        </div>
      )}
    </motion.div>
  );
}
