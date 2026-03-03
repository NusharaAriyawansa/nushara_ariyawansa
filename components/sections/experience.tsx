'use client';

import { Briefcase, FlaskConical } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer, Intern - Application Security',
    company: 'LSEG (London Stock Exchange Group)',
    period: 'Nov 2024 – May 2025',
    icon: Briefcase,
    bullets: [
      'Designed and deployed a Dockerized automated application security testing framework integrating OWASP ZAP, Burp Suite, and Nmap, aligned with OWASP WSTG, enabling repeatable security testing within CI/CD pipelines.',
      'Developed reusable Python-based scan orchestration and reporting modules, standardizing vulnerability detection and producing structured JSON/HTML security reports.',
      'Conducted web application security assessments and penetration testing on internal applications and trading platforms, identifying vulnerabilities and supporting risk-based remediation.',
      'Performed attack surface analysis by reviewing Node.js backend services (Prisma ORM), mapping request flows, data handling, and potential security weaknesses.',
      'Partnered with engineering teams to document architecture and security considerations, improving secure development awareness across teams.',
    ],
  },
  {
    role: 'Software Engineer, Pre-Intern',
    company: 'VizuaMatix',
    period: 'May 2024 – Oct 2024',
    icon: Briefcase,
    bullets: [
      'Contributed to a government digital licensing platform built with FastAPI, supporting system testing, gap analysis, debugging, and performance optimization to improve reliability and stability of a production system.',
    ],
  },
  {
    role: 'Research - Enhancing Covert Data Exfiltration from Smartphones through mmWave FMCW Radar',
    company: 'University of Colombo School of Computing',
    period: 'Nov 2024 – April 2026',
    icon: FlaskConical,
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
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div key={idx} className="sm:pl-20 relative">
                  {/* Icon bubble on timeline */}
                  <div className="absolute left-0 top-5 hidden sm:flex w-12 h-12 rounded-full bg-card border-2 border-primary/60 items-center justify-center shadow-lg shadow-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>

                  <div className="rounded-xl border border-border/50 bg-card/30 p-5 sm:p-6 hover:border-primary/40 hover:bg-card/60 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        {/* Role — white, larger */}
                        <h3 className="text-lg font-semibold text-foreground mb-0.5">{exp.role}</h3>
                        {/* Company — cyan */}
                        <p className="text-sm font-medium text-primary">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono bg-muted/40 px-3 py-1 rounded-full whitespace-nowrap self-start flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/70 leading-relaxed">
                          <span className="text-primary mt-0.3 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}