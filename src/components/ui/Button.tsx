/**
 * Button — reusable button primitive.
 *
 * Variants: primary (copper), secondary (cream/dark), outline, ghost
 * Sizes: sm, md, lg
 * Supports icons, aria-label, and full accessibility.
 */

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Optional icon rendered before the text */
  iconStart?: React.ReactNode;
  /** Optional icon rendered after the text */
  iconEnd?: React.ReactNode;
  /** Render as button or anchor tag */
  as?: "button" | "a";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-accent text-white shadow-[0_8px_24px_-8px_rgba(190,110,61,0.55)]",
    "hover:bg-accent-dark hover:shadow-[0_10px_30px_-8px_rgba(190,110,61,0.7)] hover:-translate-y-0.5",
    "active:translate-y-0 active:bg-accent-dark/90",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark",
  ].join(" "),

  secondary: [
    "bg-cream text-bg-dark shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)]",
    "hover:bg-white hover:-translate-y-0.5",
    "active:translate-y-0 active:bg-cream/80",
    "focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark",
  ].join(" "),

  outline: [
    "bg-transparent text-cream",
    "border border-border hover:border-accent",
    "hover:text-accent hover:-translate-y-0.5",
    "active:translate-y-0 active:bg-accent/10",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark",
  ].join(" "),

  ghost: [
    "bg-transparent text-muted",
    "hover:text-cream hover:bg-surface-light",
    "active:bg-surface",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  className = "",
  disabled = false,
  type = "button",
  as = "button",
  ...rest
}: ButtonProps) {
  const Component = as as any;

  return (
    <Component
      type={as === "button" ? type : undefined}
      disabled={as === "button" ? disabled : undefined}
      className={[
        "inline-flex items-center justify-center",
        "rounded-full font-medium tracking-wide",
        "transition-all duration-300 ease-in-out",
        "cursor-pointer select-none",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {iconStart && <span className="shrink-0">{iconStart}</span>}
      {children}
      {iconEnd && <span className="shrink-0">{iconEnd}</span>}
    </Component>
  );
}
