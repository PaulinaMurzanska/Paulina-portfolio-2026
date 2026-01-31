"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectItem } from "@/types";

interface ProjectNavigationProps {
  prevProject: ProjectItem | null;
  nextProject: ProjectItem | null;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  return (
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
  );
}
