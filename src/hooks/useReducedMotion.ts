"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if mobile device (width < 768px)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check user's motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const shouldReduceMotion = isMobile || prefersReducedMotion;

  // Return animation settings based on device
  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceMotion,
    // Fast transitions for mobile, normal for desktop
    duration: shouldReduceMotion ? 0.15 : 0.6,
    // No delays on mobile
    delay: shouldReduceMotion ? 0 : undefined,
    // Simplified viewport settings for mobile
    viewport: shouldReduceMotion
      ? { once: true, amount: 0.1 }
      : { once: true, margin: "-100px" },
  };
}
