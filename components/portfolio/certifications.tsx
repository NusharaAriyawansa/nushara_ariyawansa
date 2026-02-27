'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    name: '(ISC)² Candidate',
    image: '/images/certificates/isc2.png',
    issuer: 'ISC2',
    issued: 'May 2023',
    learned: 'Foundational cybersecurity concepts including risk management, access controls, and security operations aligned with ISC2 standards.',
    skills: ['Cybersecurity', 'Information Security'],
  },
  {
    name: 'Governance, Risk, and Compliance (GRC) for the Cloud-Native Revolution',
    image: '/images/certificates/grc.jpg',
    issuer: 'LinkedIn',
    issued: 'Feb 2026',
    learned: 'GRC frameworks applied to cloud-native environments, covering compliance automation, risk assessment, and governance for modern infrastructure.',
    skills: ['Cloud-Native Applications', 'GRC'],
  },
  {
    name: 'Postman API Fundamentals Student Expert',
    image: '/images/certificates/postman.png',
    issuer: 'Postman',
    issued: 'Dec 2025',
    learned: 'API testing fundamentals including request building, environment variables, test scripts, and collection management in Postman.',
    skills: ['API Testing', 'Postman'],
  },
  {
    name: 'Website Hacking / Penetration Testing',
    image: '/images/certificates/website-hacking.png',
    issuer: 'Udemy',
    issued: 'Apr 2025',
    learned: 'Practical web application penetration testing covering SQL injection, XSS, CSRF, and OWASP Top 10 vulnerability exploitation.',
    skills: ['Penetration Testing', 'Ethical Hacking'],
  },
  {
    name: 'AWS Educate Introduction to Cloud 101',
    image: '/images/certificates/aws.png',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Jul 2023',
    learned: 'Cloud computing fundamentals, AWS core services, and foundational concepts of cloud infrastructure and deployment models.',
    skills: ['Cloud Computing', 'AWS'],
  },
  {
    name: 'Burp Suite Essential Training',
    image: '/images/certificates/burpsuite.png',
    issuer: 'LinkedIn',
    issued: 'Nov 2024',
    learned: 'Hands-on Burp Suite usage for intercepting traffic, scanning for vulnerabilities, and performing manual web application security testing.',
    skills: ['Burp Suite', 'Web Security Testing'],
  },
  {
    name: 'Microsoft Security Copilot',
    image: '/images/certificates/ms-security-copilot.jpg',
    issuer: 'LinkedIn',
    issued: 'Feb 2025',
    learned: 'Using Microsoft Security Copilot for accelerating incident response, threat intelligence analysis, and security operations with AI assistance.',
    skills: ['Incident Response', 'Microsoft Copilot'],
  },
  {
    name: 'Career Essentials in Cybersecurity',
    image: '/images/certificates/career-essentials-cybersecurity.png',
    issuer: 'Microsoft & LinkedIn',
    issued: 'Feb 2025',
    learned: 'Core cybersecurity career skills including threat identification, security tools, and best practices for professional security roles.',
    skills: ['Cybersecurity', 'Information Security Awareness'],
  },
  {
    name: 'Cybersecurity Foundations',
    image: '/images/certificates/cybersecurity-foundations.jpg',
    issuer: 'LinkedIn',
    issued: 'Feb 2025',
    learned: 'Core principles of cybersecurity including the CIA triad, common attack vectors, and defensive security strategies.',
    skills: ['Cybersecurity'],
  },
  {
    name: 'The Cybersecurity Threat Landscape',
    image: '/images/certificates/threat-landscape.jpg',
    issuer: 'LinkedIn',
    issued: 'Feb 2025',
    learned: 'Understanding modern threat actors, attack techniques, vulnerability management, and how to assess organizational cyber risk.',
    skills: ['Cybersecurity', 'Threat & Vulnerability Management'],
  },
  {
    name: 'Cybersecurity Awareness: Terminology',
    image: '/images/certificates/cybersecurity-awareness.jpg',
    issuer: 'LinkedIn',
    issued: 'Feb 2025',
    learned: 'Essential cybersecurity vocabulary and concepts for effective communication across technical and non-technical teams.',
    skills: ['Cybersecurity', 'Information Security Awareness'],
  },
  {
    name: 'Web Forensics: Recovering Digital Evidence',
    image: '/images/certificates/web-forensics.png',
    issuer: 'LinkedIn',
    issued: 'Nov 2024',
    learned: 'Techniques for recovering and analyzing digital evidence from web-based systems, including log analysis and artifact recovery.',
    skills: ['Cybercrime Investigation', 'Digital Forensics'],
  },
  {
    name: 'Leveraging AI for Penetration Testing',
    image: '/images/certificates/ai-pentest.png',
    issuer: 'LinkedIn',
    issued: 'Nov 2024',
    learned: 'Applying AI tools to enhance penetration testing workflows, automate reconnaissance, and improve vulnerability discovery efficiency.',
    skills: ['Artificial Intelligence', 'Penetration Testing'],
  },
  {
    name: 'DevOps Foundations: Containers',
    image: '/images/certificates/devops-containers.png',
    issuer: 'LinkedIn',
    issued: 'Nov 2024',
    learned: 'Container fundamentals using Docker, container security best practices, and integrating containers into DevSecOps pipelines.',
    skills: ['DevOps', 'Containerization'],
  },
  {
    name: 'Introduction to Cybersecurity',
    image: '/images/certificates/cisco-cybersecurity.png',
    issuer: 'Cisco',
    issued: 'Nov 2023',
    learned: 'Introduction to cybersecurity concepts, network security fundamentals, and common cyber threats and defenses from Cisco.',
    skills: ['Cybersecurity', 'Networking'],
  },
  {
    name: 'Networking Basics',
    image: '/images/certificates/cisco-networking.png',
    issuer: 'Cisco',
    issued: 'Nov 2023',
    learned: 'Core networking concepts including TCP/IP, IP addressing, subnetting, and network protocols essential for security work.',
    skills: ['Networking', 'TCP/IP'],
  },
];

const VISIBLE = 4;

export default function Certifications() {
  const [startIdx, setStartIdx] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const prev = () => setStartIdx((p) => (p - 1 + certifications.length) % certifications.length);
  const next = () => setStartIdx((p) => (p + 1) % certifications.length);

  const visibleCerts = Array.from({ length: VISIBLE }, (_, i) =>
    certifications[(startIdx + i) % certifications.length]
  );

  return (
    <div className="relative px-6">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/20 border border-primary/60 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-white transition-all duration-300 shadow-lg"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/20 border border-primary/60 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-white transition-all duration-300 shadow-lg"
      >
        <ChevronRight size={20} />
      </button>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-5">
        {visibleCerts.map((cert, idx) => (
          <div
            key={`${startIdx}-${idx}`}
            className="group rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 overflow-hidden transition-all duration-300 flex flex-col h-[500px]"
          >
            
            {/* Certificate image — full visible, click to expand */}
            <div
              className="overflow-hidden border-b border-border/30 cursor-zoom-in flex-shrink-0 bg-gray-300 flex items-center justify-center p-4"
              style={{ height: '240px' }}
              onClick={() => setExpanded((startIdx + idx) % certifications.length)}
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {cert.name}
              </h3>

              <p className="text-xs text-primary font-medium">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mb-2">Issued {cert.issued}</p>

              <p className="text-xs text-foreground/60 leading-relaxed line-clamp-3 mb-3">
                {cert.learned}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs bg-secondary/10 text-secondary rounded border border-secondary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {certifications.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIdx(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === startIdx ? 'bg-primary w-4' : 'bg-border/60 hover:bg-primary/50 w-2'
            }`}
          />
        ))}
      </div>

      {/* Lightbox — click image to expand full screen */}
      {expanded !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
          onClick={() => setExpanded(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={certifications[expanded].image}
              alt={certifications[expanded].name}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-center text-white mt-4 text-sm">{certifications[expanded].name}</p>
            <button
              onClick={() => setExpanded(null)}
              className="block mx-auto mt-3 text-xs text-muted-foreground hover:text-white transition-colors"
            >
              Click anywhere to close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}