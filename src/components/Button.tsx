import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "ghost" | "primary" | "dark" | "outline-light";

const variantClass: Record<Variant, string> = {
  accent: "btn btn-accent",
  ghost: "btn btn-ghost",
  primary: "btn btn-primary",
  dark: "btn btn-dark",
  "outline-light": "btn btn-outline-light",
};

type Props = {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function Button({
  href,
  variant = "accent",
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
  style,
}: Props) {
  const cls = `${variantClass[variant]} ${className}`.trim();
  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
