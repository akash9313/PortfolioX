'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const login = useStore((state) => state.login);
  const updatePortfolio = useStore((state) => state.updatePortfolio);
  
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !fullName.trim()) return;
    setIsLoading(true);
    
    setTimeout(() => {
      const formattedUsername = username.toLowerCase().replace(/\s+/g, '');
      login(formattedUsername);
      
      // Initialize their portfolio data with their name
      updatePortfolio({
        username: formattedUsername,
        header: {
          name: fullName,
          tagline: "I build the future of the web.",
          description: "Welcome to my new 3D portfolio.",
        }
      });
      
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 w-full max-w-md mx-auto">
        <div className="w-full glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -z-10" />

          <Link href="/" className="flex justify-center mb-8">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </Link>

          <h1 className="text-3xl font-bold font-space text-center mb-2">Create Account</h1>
          <p className="text-muted-foreground text-center mb-8 text-sm">Join PortfolioX and build your 3D presence.</p>

          <form onSubmit={handleSignup} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium pl-1 text-foreground/80">Full Name</label>
              <input 
                type="text" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe" 
                className="bg-card border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
              />
            </div>
          
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium pl-1 text-foreground/80">Desired Username</label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe" 
                className="bg-card border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium pl-1 text-foreground/80">Password</label>
              <input 
                type="password" 
                required
                placeholder="••••••••" 
                className="bg-card border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="h-12 w-full mt-4 text-base glow-shadow"
            >
              {isLoading ? "Creating Account..." : "Create Account"} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
          </p>

        </div>
      </div>
    </div>
  );
}
