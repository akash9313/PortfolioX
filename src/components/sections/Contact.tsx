'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import { Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container px-4 md:px-6">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">
             Let&apos;s Build <GradientText>Something</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to bring your ideas to life? Send me a message and let&apos;s create an amazing digital experience together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80 pl-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="John Doe" 
                  className="bg-card/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80 pl-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="john@example.com" 
                  className="bg-card/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80 pl-1">Message</label>
              <textarea 
                id="message" 
                required
                rows={5}
                placeholder="Hi Akash, I'd like to talk about..." 
                className="bg-card/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting || isSuccess}
              className="w-full mt-2 h-14 text-base relative overflow-hidden group"
            >
              <span className={`flex items-center gap-2 transition-transform duration-300 ${isSubmitting ? '-translate-y-12' : 'translate-y-0'} ${isSuccess ? 'scale-0' : 'scale-100'}`}>
                Send Message <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </span>
              
              <span className={`absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 ${isSubmitting ? 'translate-y-0' : 'translate-y-12'}`}>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
              </span>

              <span className={`absolute inset-0 bg-green-500/20 text-green-400 flex items-center justify-center gap-2 transition-all duration-300 ${isSuccess ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <CheckCircle2 className="w-5 h-5" /> Sent Successfully
              </span>
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
