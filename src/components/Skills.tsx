"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Front-end Development",
    color: "var(--accent-1)",
    skills: ["React", "Next.js", "Remix", "Vue.js", "TypeScript", "JavaScript", "HTML5"],
  },
  {
    name: "Styling & UI",
    color: "var(--accent-2)",
    skills: [
      "Tailwind CSS",
      "CSS Modules",
      "SCSS",
      "Styled Components",
      "Responsive Design",
      "UI Architecture",
      "Performance Optimization",
    ],
  },
  {
    name: "Platforms, APIs & Testing",
    color: "var(--accent-3)",
    skills: [
      "Shopify Hydrogen",
      "Shopify API",
      "Liquid",
      "NetSuite",
      "SuiteScript",
      "CRM Integrations",
      "REST APIs",
      "React Testing Library",
      "Jest",
      "Cypress",
      "Playwright",
      "Selenium",
    ],
  },
  {
    name: "Tooling & Collaboration",
    color: "var(--accent-4)",
    skills: ["Git", "GitHub", "Bitbucket", "Jira", "ClickUp", "Confluence", "CI/CD", "Jenkins", "Agile / Scrum"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-muted) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-[var(--accent-1)] text-[var(--text-secondary)] text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.name} variants={itemVariants} className="group">
              <motion.div
                className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Decorative corner */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: category.color }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: categoryIndex * 0.5 }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ background: category.color }}
                  >
                    <span className="text-2xl font-bold text-[var(--text-primary)]">{category.name.charAt(0)}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-6">{category.name}</h3>

                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        className="flex items-center gap-3 text-[var(--text-secondary)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full"
                          style={{ background: category.color }}
                          whileHover={{ scale: 2 }}
                        />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
