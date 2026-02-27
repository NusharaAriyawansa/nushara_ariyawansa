'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin, FileText, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-10 pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center border-t border-border">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Let's Connect
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether it's a security role, research collaboration, or just a conversation about AppSec and GRC - I'd love to hear from you.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Colombo, Sri Lanka</span>
          </div>

          <div className="space-y-8">
            {/* Email */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Email</p>
              <Link
                href="https://mail.google.com/mail/?view=cm&to=nusharaariyawansa4@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 text-lg text-primary font-medium hover:text-accent transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                nusharaariyawansa4@gmail.com
              </Link>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Connect</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="https://www.linkedin.com/in/nushara-ariyawansa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Link>
                <Link
                  href="https://medium.com/@nusharaariyawansa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <FileText size={20} className="group-hover:scale-110 transition-transform" />
                  Medium
                </Link>
                <Link
                  href="https://github.com/NusharaAriyawansa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 Nushara Ariyawansa. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}