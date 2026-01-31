"use client";

import { motion } from "framer-motion";

interface ProjectCTAProps {
  gradient: string;
}

export function ProjectCTA({ gradient }: ProjectCTAProps) {
  return (
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
  );
}
