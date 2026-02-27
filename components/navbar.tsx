'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'experience', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'My Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 ${
      isScrolled
        ? 'bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="w-full px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="text-xl font-bold text-primary font-mono hover:text-primary/80 transition-colors"
        >
          &lt;NA /&gt;
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navItems.map(item => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              className={`text-sm font-medium transition-all duration-300 relative ${
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}

          {/* CV Button */}
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-colors"
          >
            <FileDown size={14} />
            CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium text-left transition-colors ${
                activeSection === item.id ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-1.5 w-fit px-4 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/30"
          >
            <FileDown size={14} />
            CV
          </a>
        </div>
      )}
    </nav>
  );
}