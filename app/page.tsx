'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import ExperienceEducation from '@/components/sections/experience-education';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      <Hero />
      <About />
      <ExperienceEducation />
      <PortfolioShowcase />
      <Contact />
    </main>
  );
}
