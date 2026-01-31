"use client";

import { BackgroundBlobs } from "./BackgroundBlobs";
import { AtomAnimation } from "./AtomAnimation";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

/**
 * Hero Section Component
 *
 * The main landing section of the portfolio featuring:
 * - Animated background blobs
 * - CSS-based atom animation with orbiting tech icons
 * - Introduction text with animated elements
 * - Profile image with glow effects
 */
export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Background Layers */}
      <BackgroundBlobs />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <HeroContent />

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <HeroImage src="/profile.png" alt="Paulina Murzanska" />
          </div>
        </div>
      </div>
    </section>
  );
}
