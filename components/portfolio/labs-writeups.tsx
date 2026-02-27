'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, BookOpen, Github, Shield } from 'lucide-react';

const vulnerabilities = [
  { name: 'Server-Side Vulnerabilities', description: 'Business logic flaws, information disclosure, and access control issues exploitable server-side.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-server-side-vulnerabilities-theory-lab-walkthroughs-569e1ba56e1c' },
  { name: 'Authentication Vulnerabilities', description: 'Broken login mechanisms, password brute-forcing, and flawed multi-factor authentication bypasses.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-authentication-vulnerabilities-theory-lab-walkthroughs-6b03eb3d9cc6' },
  { name: 'Cross-Site Request Forgery (CSRF)', description: 'Forging authenticated requests by tricking users into triggering state-changing actions.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-cross-site-request-forgery-csrf-theory-lab-walkthroughs-d762eb524209' },
  { name: 'Clickjacking (UI Redressing)', description: 'Overlaying invisible iframes to hijack user clicks and trigger unintended actions.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-4-clickjacking-ui-redressing-theory-lab-walkthroughs-239377274faf' },
  { name: 'Path Traversal', description: 'Escaping web root directories to read sensitive server files via malformed file paths.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-5-path-traversal-theory-lab-walkthroughs-18ac167fafd3' },
  { name: 'File Upload Vulnerabilities', description: 'Uploading malicious files to execute server-side code or bypass file type restrictions.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-file-upload-vulnerabilities-theory-lab-walkthroughs-78e169fa9e2e' },
  { name: 'SQL Injection', description: 'Injecting malicious SQL to extract, modify, or delete database data via unsanitised inputs.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-sql-injection-theory-lab-walkthroughs-957d737afa4c' },
  { name: 'NoSQL Injection', description: 'Manipulating NoSQL query logic to bypass authentication or extract data from document stores.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-nosql-injection-theory-lab-walkthroughs-c0ceafdd20fa' },
  { name: 'Prototype Pollution', description: 'Injecting properties into JavaScript object prototypes to alter application behaviour globally.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-9-prototype-pollution-theory-lab-walkthroughs-5f19db58969c' },
  { name: 'Race Conditions', description: 'Exploiting timing windows in concurrent requests to bypass limits or duplicate transactions.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-race-conditions-theory-lab-walkthroughs-61a519339620' },
  { name: 'Server-Side Request Forgery (SSRF)', description: 'Forcing the server to make requests to internal resources or external systems on your behalf.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-server-side-request-forgery-ssrf-attacks-theory-lab-walkthroughs-bd102863ea21' },
  { name: 'API Testing', description: 'Discovering and exploiting hidden endpoints, mass assignment flaws, and broken object-level authorisation.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-12-api-testing-theory-lab-walkthroughs-68e386d6955e' },
  { name: 'GraphQL Vulnerabilities', description: 'Abusing introspection, batching, and schema weaknesses to extract data or bypass authorisation.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-13-graphql-api-vulnerabilities-theory-lab-walkthroughs-1c478e4a20ef' },
  { name: 'WebSockets Vulnerabilities', description: 'Intercepting and manipulating WebSocket messages to exploit real-time application logic.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-websockets-vulnerabilities-theory-lab-walkthroughs-184af06823bd' },
  { name: 'Cross-Origin Resource Sharing (CORS)', description: 'Exploiting misconfigured CORS headers to steal sensitive data from authenticated sessions.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-cross-origin-resource-sharing-cors-theory-lab-walkthroughs-752ed5c8677a' },
  { name: 'Web Cache Deception', description: 'Tricking cache servers into storing private responses that are then served to attackers.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-web-cache-deception-theory-lab-walkthroughs-a500244d9c98' },
  { name: 'Web LLM Attacks', description: 'Prompt injection and indirect attacks against LLM-integrated applications to exfiltrate data or hijack actions.', medium: 'https://medium.com/@nusharaariyawansa/portswigger-academy-17-web-llm-attacks-theory-lab-walkthroughs-9682271af78c' },
];

const CATEGORIES = [
  {
    id: 'Red',
    label: 'Red Team',
    description: 'Offensive security - exploitation, privilege escalation, and attack simulation.',
    activeBg: 'bg-red-500/10',
    activeBorder: 'border-red-500/40',
    activeText: 'text-red-400',
    hoverBg: 'hover:bg-red-500/10',
    hoverBorder: 'hover:border-red-500/40',
    hoverButtonBorder: 'hover:border-red-500/50',
    hoverButtonText: 'hover:text-red-400',
  },
  {
    id: 'Blue',
    label: 'Blue Team',
    description: 'Defensive security - threat detection, log analysis, and incident response.',
    activeBg: 'bg-blue-500/10',
    activeBorder: 'border-blue-500/40',
    activeText: 'text-blue-400',
    hoverBg: 'hover:bg-blue-500/10',
    hoverBorder: 'hover:border-blue-500/40',
    hoverButtonBorder: 'hover:border-blue-500/50',
    hoverButtonText: 'hover:text-blue-400',
  },
  {
    id: 'Purple',
    label: 'Purple Team',
    description: 'Combined red and blue - adversary simulation with defensive validation.',
    activeBg: 'bg-purple-500/10',
    activeBorder: 'border-purple-500/40',
    activeText: 'text-purple-400',
    hoverBg: 'hover:bg-purple-500/10',
    hoverBorder: 'hover:border-purple-500/40',
    hoverButtonBorder: 'hover:border-purple-500/50',
    hoverButtonText: 'hover:text-purple-400',
  },
];

type Room = { name: string; url: string };
type RoomsByCategory = Record<string, Room[]>;

function fileNameToTitle(filename: string): string {
  return filename.replace(/\.md$/, '').replace(/-/g, ' ');
}

export default function LabsAndWriteups() {
  const [activeTab, setActiveTab] = useState('portswigger');
  const [activeCategory, setActiveCategory] = useState('Red');
  const [rooms, setRooms] = useState<RoomsByCategory>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab !== 'tryhackme') return;

    const fetchRooms = async () => {
      setLoading(true);
      setError(null);
      const result: RoomsByCategory = {};

      try {
        await Promise.all(
          CATEGORIES.map(async (cat) => {
            const res = await fetch(
              `https://api.github.com/repos/NusharaAriyawansa/TryHackMe-Writeups/contents/${cat.id}`
            );
            if (!res.ok) { result[cat.id] = []; return; }
            const files = await res.json();
            result[cat.id] = files
              .filter((f: any) => f.name.endsWith('.md') && f.name !== 'README.md')
              .map((f: any) => ({ name: fileNameToTitle(f.name), url: f.html_url }));
          })
        );
        setRooms(result);
      } catch {
        setError('Could not load rooms. Check your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [activeTab]);

  const currentCat = CATEGORIES.find(c => c.id === activeCategory)!;
  const currentRooms = rooms[activeCategory] ?? [];

  return (
    <div className="space-y-8">

      {/* Main toggle */}
      <div className="inline-flex rounded-lg border border-border overflow-hidden w-fit max-w-full">
        <button
          onClick={() => setActiveTab('portswigger')}
          className={`px-4 sm:px-8 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 border-r border-border ${
            activeTab === 'portswigger'
              ? 'bg-secondary/20 text-secondary'
              : 'text-foreground hover:text-foreground bg-card/30'
          }`}
        >
          PortSwigger Web Academy
        </button>
        <button
          onClick={() => setActiveTab('tryhackme')}
          className={`px-4 sm:px-8 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            activeTab === 'tryhackme'
              ? 'bg-secondary/20 text-secondary'
              : 'text-muted-foreground hover:text-foreground bg-card/30'
          }`}
        >
          TryHackMe
        </button>
      </div>

      {/* PortSwigger Content */}
      {activeTab === 'portswigger' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-semibold text-foreground">Security Vulnerability Writeups</h3>
            <span className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">17</span> / 17 pathways completed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {vulnerabilities.map((vuln, idx) => (
              <div
                key={idx}
                className="group p-3 rounded-lg border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-start gap-2">
                  <Shield size={12} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[13px] font-semibold text-foreground leading-snug">
                    {vuln.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {vuln.description}
                </p>
                <Link
                  href={vuln.medium}
                  target="_blank"
                  className="flex items-center justify-center gap-1 px-2 py-1 text-xs bg-card/60 text-primary border border-border/50 rounded hover:border-primary/50 hover:bg-primary/10 transition-colors"
                >
                  <BookOpen size={10} />
                  Blog
                  <ExternalLink size={10} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TryHackMe Content */}
      {activeTab === 'tryhackme' && (
        <div className="space-y-6">

          {/* Red / Blue / Purple selector */}
          <div className="inline-flex flex-nowrap gap-2 sm:gap-3 w-fit max-w-full">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? `${cat.activeBg} ${cat.activeText} ${cat.activeBorder}`
                    : 'bg-card/30 text-muted-foreground border-border/50 hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-foreground">{currentCat.description}</p>

          {/* Loading */}
          {loading && (
            <div className="text-sm text-muted-foreground py-8 text-center">Loading rooms from GitHub...</div>
          )}

          {/* Error */}
          {error && (
            <div className="text-sm text-red-400 py-8 text-center">{error}</div>
          )}

          {/* Empty */}
          {!loading && !error && currentRooms.length === 0 && (
            <div className="text-sm text-muted-foreground py-8 text-center">
              No writeups yet in {currentCat.label} — check back soon!
            </div>
          )}

          {/* Room cards */}
          {!loading && !error && currentRooms.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {currentRooms.map((room, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg border border-border/50 bg-card/30 ${currentCat.hoverBorder} hover:-translate-y-0.5 transition-all duration-300 group`}
                >
                  <span className="text-sm font-medium text-foreground">{room.name}</span>
                  <a
                    href={room.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-2 py-1 text-xs bg-card/60 ${currentCat.activeText} border border-border/50 rounded ${currentCat.hoverButtonBorder} transition-colors`}
                  >
                    <Github size={11} />
                    View
                  </a>
                </div>
              ))}
            </div>
          )}

        </div>
      )}
    </div>
  );
}