/**
 * Badge — reusable pill/label component.
 *
 * Used for menu item labels like "Popular", "New", "Chef's Special".
 * Set in the ticket mono voice for a hand-stamped feel.
 */

type BadgeVariant = "accent" | "muted" | "outline";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  accent: "bg-accent/15 text-accent-light border border-accent/25",
  muted: "bg-surface-light text-muted border border-border",
  outline: "bg-transparent text-accent border border-accent/35",
};

export function Badge({
  children,
  variant = "accent",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center",
        "rounded-full px-2.5 py-1",
        "text-meta",
        "transition-all duration-300",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
