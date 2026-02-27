'use client';

import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer, Intern - Application Security',
    company: 'LSEG (London Stock Exchange Group)',
    period: 'Nov 2024 – May 2025',
    points: [
      'Designed and deployed a Dockerized automated security testing framework integrating OWASP ZAP, Burp Suite, and Nmap into CI/CD pipelines, aligned with OWASP WSTG.',
      'Conducted web application vulnerability assessments and penetration testing (VAPT) on internal applications and trading platforms, identifying vulnerabilities and supporting risk-based remediation.',
      'Performed attack surface analysis by reviewing Node.js backend services (Prisma ORM), mapping request flows, data handling, and potential security weaknesses.',
      'Partnered with engineering teams to document architecture and security considerations, improving secure development awareness across teams.',
    ],
  },
  {
    title: 'Software Engineer, Pre-Intern',
    company: 'VizuaMatix',
    period: 'May 2024 – Oct 2024',
    points: [
      'Contributed to a government digital licensing platform built with FastAPI, supporting system testing, gap analysis, debugging, and performance optimization to improve reliability and stability of a production system.',
    ],
  },
  {
    title: 'Mentee',
    company: 'ScholarX, Sustainable Education Foundation',
    period: 'Oct 2023 – May 2024',
    points: [
      'Accepted into ScholarX, a competitive mentoring program for high-potential undergraduates in Sri Lanka, where I was mentored by Dr. Ridwan Shariffdeen, a Research Fellow at the Secure Software Research Group, National University of Singapore.',
    ],
  },
];

const education = [
  {
    institution: 'University of Colombo School of Computing',
    title: 'BSc (Hons) in Computer Science',
    period: 'May 2022 – May 2026',
    achievement: 'GPA: 3.61 / 4.00',
    activities: [
      'IEEE Student Branch of UCSC: Treasurer (2024/25), Editorial Content Lead (2023/24), Content Team (2022/23)',
      'AI Driven Sri Lanka - IEEE YP: Member Coordinator, Secretarial (2024/25)',
      'ISACA Student Group of UCSC: Executive Board Member (2024/25, 2023/24), Member (2022/23)',
      'UCSC ACM Student Chapter: Executive Board Member (2024/25), Content Team (2023/24, 2022/23)',
    ],
  },
  {
    institution: 'University of London',
    title: 'LLB Bachelor of Laws',
    period: 'Nov 2021 – Nov 2024',
    achievement: 'Second Class Honours (Upper Division)',
    activities: [
      'Rotaract Club of CfPS Law School: Vice President (2023/24), Director of Community Service (2022/23)',
    ],
  },
  {
    institution: 'Visakha Vidyalaya',
    title: 'Secondary Education',
    period: '2017 – 2020',
    achievement: 'GCE A/Ls (2020): AAC (Combined Mathematics, Chemistry, Physics)\nGCE O/Ls (2017): 9 As (Core subjects, Business Studies & Accounting, Health, Drama)',    modules: '',
    activities: [
      'Senior Prefect (2018/19), Junior Prefect (2016/17)',
      'National Squash Athlete, President Girl Guide, Member of the Senior Eastern Band',
    ],
  },
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-10 pt-20 px-6 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-[1600px] mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">
          Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Experience</h3>

            <div className="space-y-0">
              {experiences.map((item, idx) => (
                <div key={idx} className={`flex gap-4 sm:gap-6 relative ${idx !== experiences.length - 1 ? 'pb-6' : ''}`}>
                  {idx !== experiences.length - 1 && (
                    <div className="absolute left-5 sm:left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary/30"></div>
                  )}
                  <div className="flex-shrink-0 relative z-10 pt-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-card border-2 border-primary/50 flex items-center justify-center hover:border-primary transition-all">
                      <Briefcase size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground">{item.title}</h3>
                          <p className="text-primary font-medium text-sm">{item.company}</p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap sm:ml-4">{item.period}</span>
                      </div>
                      <ul className="mt-2 space-y-2 text-foreground/75 text-sm">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>

            <div className="space-y-0">
              {education.map((item, idx) => (
                <div key={idx} className={`flex gap-4 sm:gap-6 relative ${idx !== education.length - 1 ? 'pb-6' : ''}`}>
                  {idx !== education.length - 1 && (
                    <div className="absolute left-5 sm:left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary/30"></div>
                  )}
                  <div className="flex-shrink-0 relative z-10 pt-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-card border-2 border-secondary/50 flex items-center justify-center hover:border-secondary transition-all">
                      <GraduationCap size={20} className="text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/60 hover:border-secondary/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-foreground">{item.institution}</h4>
                          <p className="text-secondary font-medium text-sm">{item.title}</p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap sm:ml-4">{item.period}</span>
                      </div>
                      <p className="text-foreground/80 text-sm mt-1 whitespace-pre-line">{item.achievement}</p>

                      {item.modules ? (
                        <div className="mt-3 pt-2 border-t border-border/60">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Key Modules</p>
                          <p className="text-xs text-foreground/75 leading-relaxed">{item.modules}</p>
                        </div>
                      ) : null}

                      <div className="mt-3 pt-2 border-t border-border/60">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Activities</p>
                        <ul className="space-y-1">
                          {item.activities.map((activity) => (
                            <li key={activity} className="flex gap-2 text-xs text-foreground/75">
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-secondary flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}