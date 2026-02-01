"use client";

import { BackgroundBlobs } from "./BackgroundBlobs";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section className="min-h-dvh relative flex items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Layers */}
      <BackgroundBlobs />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pt-20 pb-8 md:pt-24 md:pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <HeroContent />

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <HeroImage src="/profile.png" alt="Paulina Murzanska" />
          </div>
        </div>
      </div>
    </section>
  );
}
