'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Portfolio } from '@/lib/store';
import { Menu, X } from 'lucide-react';

export function Navigation({ data }: { data: Portfolio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'glass px-6 py-2 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-white/10 mx-auto max-w-5xl' 
              : 'px-0'
          }`}>
            
            <a href="#hero" className="text-xl font-bold font-space tracking-wider">
              {data.header.name.charAt(0)}<span style={{ color: data.theme.primaryColor }}>{data.header.name.slice(1)}</span>.
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px transition-all group-hover:w-full" style={{ backgroundColor: data.theme.primaryColor }} />
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-foreground/80 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 bg-background/80 md:hidden flex flex-col pt-20 px-6"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground/80 glass rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-space font-bold transition-colors hover:opacity-80"
                  style={{ color: data.theme.primaryColor }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
