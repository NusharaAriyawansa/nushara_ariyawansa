'use client';

import Image from 'next/image';
import { Award, Code2, Download, FlaskConical, Quote } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Code2,
      value: '10+',
      label: 'Projects',
      subtitle: 'Security & full-stack solutions',
    },
    {
      icon: Award,
      value: '16+',
      label: 'Certifications',
      subtitle: 'ISC2, AWS, Azure & more',
    },
    {
      icon: FlaskConical,
      value: '150+',
      label: 'Labs Completed',
      subtitle: 'PortSwigger & TryHackMe',
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute -top-12 left-1/3 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">About Me</h2>
          <p className="text-muted-foreground text-lg">Bridging security, code, and compliance</p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6 items-center">
          {/* LEFT — Bio */}
          <div className="space-y-5">
            <h3 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              Hello, I&apos;m
              <br />
              <span className="text-primary">Nushara Ariyawansa</span>
            </h3>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a cybersecurity-focused Computer Science undergraduate at the University of Colombo, with a dual degree in Law (LLB) from the University of London. I specialize in Application Security and Governance, Risk & Compliance (GRC).
            </p>

            <p className="text-base text-foreground/70 leading-relaxed">
              I've built automated security testing frameworks, conducted penetration testing on real-world platforms, and collaborated with engineering teams to embed security into development workflows. My legal background gives me a unique edge in translating technical vulnerabilities into business and regulatory risk.
            </p>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm sm:text-base text-foreground/90">
              <Quote className="h-4 w-4 text-secondary flex-shrink-0" />
              <p className="italic">"Where code meets compliance - securing systems from the inside out."</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 text-sm font-medium rounded-lg border border-border bg-card/60 text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full border-2 border-primary/40 bg-card/40 p-2 shadow-2xl shadow-secondary/30">
              <Image
                src="/profile.jpg"
                alt="Nushara Ariyawansa"
                fill
                sizes="(max-width: 640px) 320px, 384px"
                className="rounded-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.label}
                className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-4xl font-bold text-foreground">{stat.value}</span>
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/85">
                  {stat.label}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">{stat.subtitle}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}