'use client';

import Link from 'next/link';
import { Github, Linkedin, FileText } from 'lucide-react';
import { useEffect, useRef } from 'react';

function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    let animId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 8, 20, 0.035)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (Math.random() > 0.98) {
          ctx.fillStyle = 'rgba(0, 255, 255, 1)';
        } else {
          ctx.fillStyle = `rgba(0, 200, 220, ${Math.random() * 0.2 + 0.08})`;
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Matrix rain */}
      <CyberGrid />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse opacity-30 pointer-events-none" />

      {/* Vignette — darkens edges so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,8,20,0.85) 100%)' }}
      />

      <div className="w-full max-w-[1600px] mx-auto z-10 text-center space-y-8">

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            Nushara Ariyawansa
          </h1>
          <p className="text-xl sm:text-2xl text-primary font-mono font-medium">
            Application Security Engineer · CS + Law
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed italic">
          "Where code meets compliance - securing systems from the inside out."
        </p>

        {/* Specialization tags */}
        <div className="flex flex-wrap gap-3 justify-center">
          {['Penetration Testing', 'AppSec', 'GRC', 'Secure Development', 'OWASP'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 text-sm font-medium rounded-lg border border-border bg-card/60 text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 justify-center pt-4">
          <Link href="https://www.linkedin.com/in/nushara-ariyawansa" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 flex flex-col items-center gap-1">
            <Linkedin size={24} />
            <span className="text-xs">LinkedIn</span>
          </Link>
          <Link href="https://medium.com/@nusharaariyawansa" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 flex flex-col items-center gap-1">
            <FileText size={24} />
            <span className="text-xs">Medium</span>
          </Link>
          <Link href="https://github.com/NusharaAriyawansa" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 flex flex-col items-center gap-1">
            <Github size={24} />
            <span className="text-xs">GitHub</span>
          </Link>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="pt-8 animate-bounce cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex items-start justify-center pt-1">
            <div className="w-1 h-2 bg-primary/60 rounded-full" />
          </div>
        </button>

      </div>
    </section>
  );
}