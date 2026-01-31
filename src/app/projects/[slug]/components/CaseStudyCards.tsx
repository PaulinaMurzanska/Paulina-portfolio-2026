"use client";

import { motion } from "framer-motion";

interface CaseStudyCardsProps {
  challenge: string;
  solution: string;
  impact: string;
  gradient: string;
}

export function CaseStudyCards({ challenge, solution, impact, gradient }: CaseStudyCardsProps) {
  const cards = [
    {
      title: "The Challenge",
      content: challenge,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      ),
      delay: 0.1,
    },
    {
      title: "The Solution",
      content: solution,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      delay: 0.2,
    },
    {
      title: "The Impact",
      content: impact,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      ),
      delay: 0.3,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          className="bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: card.delay }}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
            style={{ background: gradient }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {card.icon}
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">{card.title}</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">{card.content}</p>
        </motion.div>
      ))}
    </div>
  );
}
