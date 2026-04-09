import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary", className)}>
      {children}
    </span>
  );
}
