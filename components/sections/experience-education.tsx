'use client';

import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Intern, Software Engineer — Application Security',
    company: 'LSEG (London Stock Exchange Group)',
    period: 'Nov 2024 – May 2025',
    bullets: [
      'Designed and deployed a Dockerized automated application security testing framework integrating OWASP ZAP, Burp Suite, and Nmap, aligned with OWASP WSTG, enabling repeatable security testing within CI/CD pipelines.',
      'Developed reusable Python-based scan orchestration and reporting modules, standardizing vulnerability detection and producing structured JSON/HTML security reports.',
      'Conducted web application security assessments and penetration testing on internal applications and trading platforms, identifying vulnerabilities and supporting risk-based remediation.',
      'Performed attack surface analysis by reviewing Node.js backend services (Prisma ORM), mapping request flows, data handling, and potential security weaknesses.',
      'Partnered with engineering teams to document architecture and security considerations, improving secure development awareness across teams.',
    ],
  },
  {
    role: 'Pre-Intern, Software Engineer',
    company: 'VizuaMatix',
    period: 'May 2024 – Oct 2024',
    bullets: [
      'Contributed to a government digital licensing platform built with FastAPI, supporting system testing, gap analysis, debugging, and performance optimization to improve reliability and stability of a production system.',
    ],
  },
  {
    role: 'Research — Covert Data Exfiltration via mmWave FMCW Radar',
    company: 'University of Colombo School of Computing',
    period: '2024 – present',
    bullets: [
      'Designed a Java-based Android application to modulate smartphone vibration signals using OOK and PWAM schemes, demonstrating a covert data exfiltration channel leveraging physical side effects.',
      'Built an end-to-end experimental pipeline integrating mobile signal generation, mmWave radar-based side-channel capture, and MATLAB decoding using cross-correlation and adaptive thresholding.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Experience</h2>
          <p className="text-muted-foreground text-lg">Where I've worked and researched</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="sm:pl-16 relative">
                {/* Dot */}
                <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="rounded-xl border border-border/50 bg-card/30 p-6 hover:border-primary/40 hover:bg-card/60 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-primary flex-shrink-0" />
                        <h3 className="text-base font-semibold text-primary">{exp.role}</h3>
                      </div>
                      <p className="text-sm font-medium text-foreground">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono bg-muted/40 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70 leading-relaxed">
                        <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}