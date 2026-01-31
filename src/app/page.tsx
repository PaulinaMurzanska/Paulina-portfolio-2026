import { Navigation, Hero, About, Timeline, Skills, Projects, Contact } from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-[var(--text-muted)] text-sm">
        <p>{new Date().getFullYear()} · Crafted with Next.js & Framer Motion</p>
      </footer>
    </>
  );
}
