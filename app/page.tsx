'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import MyWork from '@/components/sections/my-work';
import Contact from '@/components/sections/contact';
import EduAchievements from '@/components/sections/education-achievements';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <MyWork />
      <EduAchievements />
      <Contact />
    </main>
  );
}
