'use client';

import { Portfolio } from '@/lib/store';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export function Footer({ data }: { data: Portfolio }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: `radial-gradient(ellipse at top, ${data.theme.primaryColor}20, transparent, transparent)` }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-2xl font-bold font-space mb-2">
              {data.header.name}<span style={{ color: data.theme.primaryColor }}>.</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building modern, creative, and interactive digital experiences. Available for new opportunities.
            </p>
          </div>

          <div className="flex gap-4">
            {data.contact.github && (
              <a href={data.contact.github} aria-label="GitHub" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white transition-colors" style={{ '--tw-hover-bg': data.theme.primaryColor } as any} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.theme.primaryColor} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {data.contact.linkedin && (
              <a href={data.contact.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.theme.primaryColor} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
            {data.contact.twitter && (
              <a href={data.contact.twitter} aria-label="Twitter" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.theme.primaryColor} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <FaTwitter className="w-5 h-5" />
              </a>
            )}
            {data.contact.email && (
              <a href={`mailto:${data.contact.email}`} aria-label="Email" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.theme.primaryColor} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <Mail className="w-5 h-5" />
              </a>
            )}
            {data.contact.instagram && (
              <a href={data.contact.instagram} aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.theme.primaryColor} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <FaInstagram className="w-5 h-5" />
              </a>
            )}
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
          <p>© {currentYear} {data.header.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
