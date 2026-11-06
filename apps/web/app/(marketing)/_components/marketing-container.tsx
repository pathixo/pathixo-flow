import * as React from 'react';

/**
 * Shared width strategy for the marketing surface.
 *
 * - Default ("contained"): fluid content aligned to a wide 1440px frame with
 *   responsive edge padding — fills the browser on normal screens while keeping
 *   line lengths readable on very wide monitors.
 * - Bleed: full-bleed 100% width band with edge padding only — used for
 *   hero visuals and other edge-to-edge moments.
 *
 * Text blocks keep their own readable caps (`max-w-3xl` headings, `max-w-2xl`
 * body) inside the container, so wide screens never stretch prose.
 */
type MarketingContainerProps = {
  /** Render without the max-width cap (edge-to-edge band). */
  bleed?: boolean;
  className?: string;
  children: React.ReactNode;
};

const CONTAINED_CLASSES = 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10';
const BLEED_CLASSES = 'w-full px-4 sm:px-6 lg:px-10';

export function MarketingContainer({ bleed = false, className = '', children }: MarketingContainerProps) {
  return <div className={`${bleed ? BLEED_CLASSES : CONTAINED_CLASSES} ${className}`.trim()}>{children}</div>;
}
