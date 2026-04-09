import { siteData } from '@/lib/data';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GradientText } from '@/components/ui/gradient-text';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-2xl font-bold font-space mb-2">
              Akash<GradientText>.</GradientText>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building modern, creative, and interactive digital experiences. Available for new opportunities.
            </p>
          </div>

          <div className="flex gap-4">
            <a href={siteData.contact.github} aria-label="GitHub" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(138,43,226,0.6)]">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href={siteData.contact.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(138,43,226,0.6)]">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${siteData.contact.email}`} aria-label="Email" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(138,43,226,0.6)]">
              <Mail className="w-5 h-5" />
            </a>
            <a href={siteData.contact.instagram} aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(138,43,226,0.6)]">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
          <p>© {currentYear} Akash. All rights reserved.</p>
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
