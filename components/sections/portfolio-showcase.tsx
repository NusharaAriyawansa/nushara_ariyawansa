'use client';

import { useState } from 'react';
import TechStack from '@/components/portfolio/tech-stack';
import ProjectsGrid from '@/components/portfolio/projects-grid';
import Certifications from '@/components/portfolio/certifications';
import LabsAndWriteups from '@/components/portfolio/labs-writeups';

const tabs = [
  { id: 'tech', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'labs', label: 'Labs & Writeups' },
  { id: 'certifications', label: 'Certifications' },
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('tech');

  return (
    <section id="portfolio" className="relative isolate z-[60] py-10 pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-[1600px] mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">
          My Work
        </h2>

        {/* Tab bar */}
        <div className="relative z-[70] grid grid-cols-2 sm:grid-cols-4 rounded-lg border border-border overflow-hidden mb-8 w-full pointer-events-auto">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              onPointerDown={() => setActiveTab(tab.id)}
              className={`relative z-[71] px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium cursor-pointer pointer-events-auto transition-all duration-200 ${
                idx % 2 === 0 ? 'border-r border-border sm:border-r-0' : ''
              } ${
                idx < 2 ? 'border-b border-border sm:border-b-0' : ''
              } ${
                idx < tabs.length - 1 ? 'sm:border-r sm:border-border' : ''
              } ${
                activeTab === tab.id
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:text-foreground bg-card/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[600px]">
          {activeTab === 'tech' && <TechStack />}
          {activeTab === 'projects' && <ProjectsGrid />}
          {activeTab === 'labs' && <LabsAndWriteups />}
          {activeTab === 'certifications' && <Certifications />}
        </div>

      </div>
    </section>
  );
}