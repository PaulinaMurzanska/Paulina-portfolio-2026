"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { getCompanyColors } from "@/data/companyColors";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export function ProjectCard({ project, index, isHovered, onHover }: ProjectCardProps) {
  const { color, gradient } = getCompanyColors(project.company);

  return (
    <motion.div
      key={project.id}
      id={`showcase-${project.id}`}
      className="group relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      layout
    >
      <Link href={`/projects/${project.id}?from=projects`}>
        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-lg h-full relative cursor-pointer"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ProjectCardHeader
            project={project}
            gradient={gradient}
            isHovered={isHovered}
          />
          <ProjectCardContent
            project={project}
            color={color}
            gradient={gradient}
            isHovered={isHovered}
          />
          <HoverBorderEffect gradient={gradient} isHovered={isHovered} />
        </motion.div>
      </Link>
    </motion.div>
  );
}

interface ProjectCardHeaderProps {
  project: ProjectItem;
  gradient: string;
  isHovered: boolean;
}

function ProjectCardHeader({ project, gradient, isHovered }: ProjectCardHeaderProps) {
  return (
    <div className="h-48 relative overflow-hidden" style={{ background: gradient }}>
      {project.projectLogo && (
        <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center p-2">
          <img
            src={project.projectLogo}
            alt={`${project.company} logo`}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {project.isPersonal && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
          Personal Project
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
        <motion.span
          className="text-white/20 select-none uppercase text-center"
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "2.5rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
          }}
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {project.company}
        </motion.span>
      </div>

      {isHovered && <FloatingParticles />}

      <motion.div
        className="absolute bottom-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
        initial={{ opacity: 0, x: 20 }}
        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        View Details →
      </motion.div>
    </div>
  );
}

function FloatingParticles() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          initial={{ x: Math.random() * 100, y: 200, opacity: 0 }}
          animate={{ y: -50, opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          style={{ left: `${20 + i * 15}%` }}
        />
      ))}
    </>
  );
}

interface ProjectCardContentProps {
  project: ProjectItem;
  color: string;
  gradient: string;
  isHovered: boolean;
}

function ProjectCardContent({ project, color, gradient, isHovered }: ProjectCardContentProps) {
  return (
    <div className="p-8">
      <div className="flex items-center gap-2 mb-2">
        <h3
          className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text transition-all"
          style={isHovered ? { backgroundImage: gradient, WebkitBackgroundClip: "text" } : {}}
        >
          {project.company}
        </h3>
      </div>
      <p className="text-[var(--accent-1)] text-sm font-medium mb-1">{project.role}</p>
      <p className="text-[var(--text-muted)] text-sm mb-3">{project.project}</p>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed line-clamp-2">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech, techIndex) => (
          <motion.span
            key={tech}
            className="px-3 py-1 rounded-full text-sm text-white"
            style={{ background: color }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: techIndex * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-3 py-1 rounded-full text-sm bg-[var(--bg-secondary)] text-[var(--text-muted)]">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}

interface HoverBorderEffectProps {
  gradient: string;
  isHovered: boolean;
}

function HoverBorderEffect({ gradient, isHovered }: HoverBorderEffectProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl pointer-events-none"
      style={{
        border: "2px solid transparent",
        borderImage: isHovered ? gradient : "none",
        borderImageSlice: 1,
      }}
      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
    />
  );
}
