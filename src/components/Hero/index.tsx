"use client";

import { BackgroundBlobs } from "./BackgroundBlobs";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

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
