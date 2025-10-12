// src/components/ui/Card.tsx
import { cn } from "./cn";

export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-lg border border-black/10 dark:border-white/10 bg-background", className)}>
      {children}
    </div>
  );
}

export function CardHover({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-black/10 dark:border-white/10 bg-background transition-shadow hover:shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
