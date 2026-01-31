"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#db2777]"
        style={{ width: progressWidth }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#db2777] flex items-center justify-center">
              <span className="text-white font-bold text-lg">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-semibold text-[var(--text-primary)] hidden sm:block">Paulina</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium group"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#db2777] group-hover:w-full transition-all duration-300"
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="/#contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-[var(--text-primary)] text-white font-medium text-sm hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Connect
          </motion.a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-[var(--text-primary)]" />
              <span className="w-full h-0.5 bg-[var(--text-primary)]" />
              <span className="w-2/3 h-0.5 bg-[var(--text-primary)]" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
