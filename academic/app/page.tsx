import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ResearchSection } from "@/components/research-section"
import { ProjectsSection } from "@/components/projects-section"
import { PublicationsSection } from "@/components/publications-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ResearchSection />
      <ProjectsSection />
      <PublicationsSection />
      <SkillsSection />
      <ContactSection />

      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Alex Chen. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  )
}
