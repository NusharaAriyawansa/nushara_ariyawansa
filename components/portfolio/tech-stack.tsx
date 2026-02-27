'use client';

import { Code, Server } from 'lucide-react';

const securityTools = [
  { name: 'Burp Suite', color: 'border-orange-500/50 text-orange-400' },
  { name: 'OWASP ZAP', color: 'border-blue-500/50 text-blue-400' },
  { name: 'Nmap', color: 'border-cyan-500/50 text-cyan-400' },
  { name: 'Wireshark', color: 'border-purple-500/50 text-purple-400' },
  { name: 'Microsoft Sentinel', color: 'border-blue-400/50 text-blue-300' },
  { name: 'Microsoft Defender', color: 'border-blue-600/50 text-blue-400' },
  { name: 'OWASP Top 10', color: 'border-red-500/50 text-red-400' },
  { name: 'VAPT', color: 'border-green-500/50 text-green-400' },
  { name: 'GDPR', color: 'border-yellow-500/50 text-yellow-400' },
  { name: 'NIST', color: 'border-cyan-600/50 text-cyan-400' },
  { name: 'HIPAA', color: 'border-teal-500/50 text-teal-400' },
  { name: 'ISO 27001', color: 'border-pink-500/50 text-pink-400' },
];

const languagesAndFrameworks = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

const devopsAndCloud = [
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

function IconGrid({ tools }: { tools: { name: string; icon: string }[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 gap-2 sm:gap-3">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="flex flex-col items-center gap-1 p-2 rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 transition-all duration-300 cursor-default group"
        >
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xs text-foreground/80 text-center group-hover:text-primary transition-colors leading-tight">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="space-y-10 sm:space-y-12">

      {/* Section 1 — Security & GRC */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Security & GRC</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {securityTools.map((tool) => (
            <div
              key={tool.name}
              className={`p-3 rounded-lg border bg-card/30 hover:bg-card/70 text-center transition-all duration-300 cursor-default ${tool.color}`}
            >
              <div className="text-sm font-medium">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Languages & Frameworks */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold text-foreground">Languages & Frameworks</h3>
        </div>
        <IconGrid tools={languagesAndFrameworks} />
      </div>

      {/* Section 3 — DevOps, Cloud & Databases */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold text-foreground">DevOps, Cloud & Databases</h3>
        </div>
        <IconGrid tools={devopsAndCloud} />
      </div>

    </div>
  );
}