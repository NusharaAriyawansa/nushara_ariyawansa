'use client';

import { useState } from 'react';
import { GraduationCap, HandHeart, Trophy } from 'lucide-react';
import Education from '@/components/edu-achieve/education';
import Volunteering from '@/components/edu-achieve/volunteering';
import Awards from '@/components/edu-achieve/awards';

const tabs = [
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'volunteering', label: 'Volunteering', icon: HandHeart },
  { id: 'awards', label: 'Awards', icon: Trophy },
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="education" className="relative isolate z-[60] py-10 pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-[1600px] mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">
          Background
        </h2>

        {/* Tab bar */}
        <div className="relative z-[70] grid grid-cols-2 sm:grid-cols-3 rounded-lg border border-border overflow-hidden mb-8 w-full pointer-events-auto">
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
              <span className="inline-flex items-center gap-1.5">
                <tab.icon size={14} aria-hidden="true" />
                <span>{tab.label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[600px]">
          {activeTab === 'education' && <Education />}
          {activeTab === 'volunteering' && <Volunteering />}
          {activeTab === 'awards' && <Awards />}
        </div>
      </div>
    </section>
  );
}