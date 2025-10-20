// src/components/ui/Badge.tsx
import { cn } from "./cn";

export type BadgeProps = {
  children: React.ReactNode;
  color?: "default" | "green" | "blue" | "amber";
  variant?: "solid" | "outline";
  className?: string;
};

export function Badge({ children, color = "default", variant = "solid", className = "" }: BadgeProps) {
  const palette =
    color === "green"
      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200"
      : color === "blue"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200"
      : color === "amber"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
      : "bg-gray-100 text-gray-800 dark:bg-white/[0.06] dark:text-gray-200";
  const outlineStyles = "border border-gray-300 dark:border-white/10 bg-transparent text-gray-700 dark:text-gray-200";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "outline" ? outlineStyles : palette,
        className
      )}
    >
      {children}
    </span>
  );
}
