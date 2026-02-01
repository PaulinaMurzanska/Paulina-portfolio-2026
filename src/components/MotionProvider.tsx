"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MotionConfig
      reducedMotion={isMobile ? "always" : "user"}
      transition={
        isMobile
          ? { duration: 0.15, delay: 0 }
          : undefined
      }
    >
      {children}
    </MotionConfig>
  );
}
