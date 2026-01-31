"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#db2777]"
          style={{ width: progressWidth }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
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

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="/paulina-murzanska-cv.pdf"
                download="Paulina-Murzanska-CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#7c3aed] text-[#7c3aed] font-medium text-sm hover:bg-[#7c3aed] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                CV
              </motion.a>
              <motion.a
                href="/#contact"
                className="inline-flex px-6 py-2.5 rounded-full bg-[var(--text-primary)] text-white font-medium text-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Connect
              </motion.a>
            </div>

            <button
              className="md:hidden p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <motion.span
                  className="w-full h-0.5 bg-[var(--text-primary)] origin-left"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-[var(--text-primary)]"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="w-2/3 h-0.5 bg-[var(--text-primary)] origin-left"
                  animate={isMobileMenuOpen ? { rotate: -45, width: "100%", y: 0 } : { rotate: 0, width: "66%", y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-0 right-0 bg-white shadow-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      className="block px-6 py-4 text-[var(--text-primary)] font-medium hover:bg-[var(--bg-secondary)] transition-colors"
                      onClick={handleMobileNavClick}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="px-6 py-4 flex flex-col gap-3"
                >
                  <a
                    href="/paulina-murzanska-cv.pdf"
                    download="Paulina-Murzanska-CV.pdf"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full border-2 border-[#7c3aed] text-[#7c3aed] font-medium"
                    onClick={handleMobileNavClick}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CV
                  </a>
                  <a
                    href="/#contact"
                    className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white font-medium"
                    onClick={handleMobileNavClick}
                  >
                    Let's Connect
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
