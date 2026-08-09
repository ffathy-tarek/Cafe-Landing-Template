/**
 * Container — reusable max-width layout wrapper.
 *
 * Centers content with responsive horizontal padding
 * and a consistent max-width (1280px / 80rem).
 */

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** HTML element to render (default: "div") */
  as?: keyof React.JSX.IntrinsicElements;
};

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
