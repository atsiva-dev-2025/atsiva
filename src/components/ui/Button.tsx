// src/components/ui/Button.tsx
"use client";

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors disabled:opacity-60";

    const sizeStyles = 
      size === "sm" ? "px-2.5 py-1.5" : 
      size === "lg" ? "px-6 py-4 text-lg" : 
      "px-4 py-2";

    const styles =
      variant === "primary"
        ? "bg-foreground text-background hover:opacity-90"
        : variant === "secondary"
        ? "bg-black/[0.04] dark:bg-white/[0.06] text-foreground hover:bg-black/[0.06] dark:hover:bg-white/[0.08]"
        : variant === "outline"
        ? "border border-black/10 dark:border-white/10 text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
        : "text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]";

    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={`${base} ${sizeStyles} ${styles} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading</span>
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
