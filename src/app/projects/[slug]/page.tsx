"use client";

import { motion } from "framer-motion";
import { useParams, useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import experienceData from "@/data/data.json";
import { getCompanyColors } from "@/data/companyColors";
import { ProjectItem } from "@/types";
import {
  ProjectHero,
  CaseStudyCards,
  FeaturesSection,
  TechSection,
  ProjectNavigation,
  ProjectCTA,
} from "./components";

const allProjects: ProjectItem[] = experienceData.experienceTimeline;

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
  const { color, gradient } = getCompanyColors(project.company);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen">
      <ProjectHero project={project} gradient={gradient} fromSection={fromSection} />

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <ProjectOverview project={project} color={color} />

          {project.challenge && project.solution && project.impact && (
            <CaseStudyCards
              challenge={project.challenge}
              solution={project.solution}
              impact={project.impact}
              gradient={gradient}
            />
          )}

          <FeaturesSection
            features={project.features || []}
            gradient={gradient}
            url={project.url}
            visibility={project.visibility}
          />

          <TechSection technologies={project.technologies} gradient={gradient} />

          <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
        </div>
      </section>

      <ProjectCTA gradient={gradient} />
    </main>
  );
}

interface ProjectOverviewProps {
  project: ProjectItem;
  color: string;
}

function ProjectOverview({ project, color }: ProjectOverviewProps) {
  return (
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
  );
}
