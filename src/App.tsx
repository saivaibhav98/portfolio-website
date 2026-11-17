import React from 'react';
import { StarBackground } from './components/StarBackground';
import { CursorGlow } from './components/CursorGlow';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InternshipSection } from './components/InternshipSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080817] text-[#F8FAFC] selection:bg-purple-600/30 selection:text-cyan-300">
      {/* Background Starfield & Atmospheric Glow */}
      <StarBackground />

      {/* Smooth Cursor Tracking Glow (Desktop only) */}
      <CursorGlow />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections in EXACT Master Prompt Order:
          1. HOME
          2. ABOUT
          3. EDUCATION
          4. SKILLS
          5. EXPERIENCE
          6. INTERNSHIP
          7. PROJECTS
          8. CERTIFICATIONS
          9. CONTACT
      */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <InternshipSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Clean Professional Engineering Footer */}
      <Footer />
    </div>
  );
};

export default App;
