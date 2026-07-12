import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer";

const variants = {
  primary:
    "bg-violet text-white hover:bg-violet-strong shadow-[0_0_0_0_rgba(139,108,247,0)] hover:shadow-[0_8px_24px_-6px_rgba(139,108,247,0.55)] hover:-translate-y-0.5",
  secondary:
    "border border-border-soft text-ink hover:border-violet hover:text-violet hover:-translate-y-0.5",
  ghost: "text-ink hover:text-violet",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
