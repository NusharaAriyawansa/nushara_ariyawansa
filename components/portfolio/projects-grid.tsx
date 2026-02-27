'use client';

import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [
  {
    title: 'Secure File Encryption Tool',
    image: '/images/projects/file.jpg',
    description: 'Cross-platform AES-256 encryption tool with PBKDF2 key derivation and HMAC-SHA256 integrity protection, implementing secure key management and password-based encryption best practices.',
    tech: ['Python', 'PyCryptodome', 'AES-256', 'HMAC-SHA256'],
    category: 'Security',
    github: '#',
    medium: 'https://medium.com/@nusharaariyawansa/building-your-own-secure-file-encryption-tool-a-complete-guide-ca360f4266b4',
  },
  {
    title: 'GRC Risk Assessment Framework',
    image: '/images/projects/grc.png',
    description: 'Built a full-stack Governance, Risk, and Compliance tool featuring Likelihood × Impact risk scoring, compliance mapping to GDPR/HIPAA/PCI-DSS, policy lifecycle management, and audit logging.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite'],
    category: 'Security',
    github: 'https://github.com/NusharaAriyawansa/Risk-Assessment-Framework',
    medium: 'https://nusharaariyawansa.medium.com/portswigger-academy-path-traversal-theory-lab-walkthroughs-9ed1a8d9cd3e',
  },
  {
    title: 'Phishing Detection System',
    image: '/images/projects/phishing.jpg',
    description: 'ML-based phishing detection system achieving 90%+ accuracy with 30+ URL/email features, providing real-time threat classification and confidence scoring via web and CLI interfaces.',
    tech: ['Python', 'Flask', 'Machine Learning'],
    category: 'Security',
    github: '#',
    medium: 'https://nusharaariyawansa.medium.com/portswigger-academy-clickjacking-ui-redressing-theory-lab-walkthroughs-49442b13e491',
  },
  {
    title: 'Password Strength Analyzer',
    image: '/images/projects/password.png',
    description: 'Real-time password security analyzer with entropy, pattern checks, and breach detection via Have I Been Pwned API, promoting stronger authentication practices.',
    tech: ['Python', 'Flask', 'JavaScript', 'HTML5'],
    category: 'Security',
    github: '#',
    medium: 'https://nusharaariyawansa.medium.com/building-a-real-time-password-strength-analyzer-a-complete-full-stack-project-2efb317297d9',
  },
  {
    title: 'MicroMart',
    image: '/images/projects/micro-mart.png',
    description: 'Distributed Spring Boot microservices e-commerce platform with RESTful APIs, JPA-based data persistence, inter-service communication, and containerized deployment.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'MySQL'],
    category: 'Full Stack',
    github: 'https://github.com/NusharaAriyawansa/MicroMart',
    medium: '#',
  },
  {
    title: 'Wandr.',
    image: '/images/projects/wandr.jpg',
    description: 'Full-stack travel platform with RESTful APIs for route planning, bookings, and user management with role-based access for tourists and service providers.',
    tech: ['Flutter', 'Next.js', 'FastAPI', 'PostgreSQL', 'Spring Boot'],
    category: 'Full Stack',
    github: 'https://github.com/amandi-udawatta/Wandr',
    medium: '#',
  },
  {
    title: "Athlete'360",
    image: '/images/projects/athlete360.jpg',
    description: 'Sports center management system with membership management, session scheduling, coach management, payment processing, event coordination, and analytics.',
    tech: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'Full Stack',
    github: 'https://github.com/NusharaAriyawansa/Athlete360',
    medium: '#',
  },
  {
    title: 'StayHub',
    image: '/images/projects/stayhub.png',
    description: 'Hotel management web application managing employee details, room bookings, reservations, gym facilities, and food menus to optimize operations and enhance guest experiences.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/Nuwan0612/Group-Project-MERN',
    medium: '#',
  },
];

export default function ProjectsGrid() {
  const [startIdx, setStartIdx] = useState(0);
  const isMobile = useIsMobile();
  const visibleCount = isMobile ? 1 : 4;

  const prev = () => setStartIdx((p) => (p - 1 + projects.length) % projects.length);
  const next = () => setStartIdx((p) => (p + 1) % projects.length);

  const visibleProjects = Array.from({ length: visibleCount }, (_, i) =>
    projects[(startIdx + i) % projects.length]
  );

  return (
    <div className="relative px-0 sm:px-6">
      <button onClick={prev} className="absolute left-1 sm:-left-1 top-[78%] -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/60 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-white transition-all duration-300 shadow-lg">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-1 sm:-right-1 top-[78%] -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/60 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-white transition-all duration-300 shadow-lg">
        <ChevronRight size={20} />
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {visibleProjects.map((project, idx) => (
          <div
            key={`${startIdx}-${idx}`}
            className="group rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 overflow-hidden transition-all duration-300"
            style={{ minHeight: '500px' }}
          >
            {/* Image — always 200px */}
            <div style={{ height: '200px', overflow: 'hidden' }} className="border-b border-border/30">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content — always 260px */}
            <div style={{ height: '300px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
              {/* Badge — 24px */}
              <span className={`self-end text-xs px-2 py-0.5 rounded border mb-2 mt-2 ${
                project.category === 'Security'
                  ? 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10'
                  : 'text-purple-400 border-purple-500/40 bg-purple-500/10'
              }`}>
                {project.category}
              </span>

              {/* Title — 1 line, ~20px */}
              <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors"
                style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                {project.title}
              </h3>

              {/* Description — 3 lines, ~48px */}
              <p className="text-xs text-foreground/70 leading-relaxed mb-4"
                style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {project.description}
              </p>

              {/* Tech tags — 1 row max, ~24px */}
              <div style={{ height: '24px', overflow: 'hidden', display: 'flex', gap: '6px', flexWrap: 'nowrap', marginBottom: '24px' }}>
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs bg-secondary/10 text-secondary rounded border border-secondary/30 whitespace-nowrap flex-shrink-0">
                    {tech}
                  </span>
                ))}
              </div>

              

              {/* Buttons — always at bottom */}
              <div className="flex gap-2 mt-auto pt-2 border-t border-border/20">
                <Link href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors">
                  <Github size={13} />Code
                </Link>
                <Link href={project.medium} target="_blank" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors">
                  <ExternalLink size={13} />Blog
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, idx) => (
          <button key={idx} onClick={() => setStartIdx(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === startIdx ? 'bg-primary w-4' : 'bg-border/60 hover:bg-primary/50'}`}
          />
        ))}
      </div>
    </div>
  );
}