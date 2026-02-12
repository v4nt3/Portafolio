"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ThesisSection } from "@/components/portfolio/thesis-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ThesisSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
