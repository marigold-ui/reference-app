import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@marigold/system';

export interface CommonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

// Container
// ---------------
/**
 * Component used as a contaner for blocks, content and breakouts.
 */
export const Container = ({ className, children, ...props }: CommonProps) => (
  <div
    data-container=""
    className={cn(
      'grid place-items-center',
      'grid-cols-content md:grid-cols-content-md xl:grid-cols-content-xl',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Block
// ---------------
/**
 * Component to wrap arbitrary elements in a block.
 */
export const Block = ({ className, children, ...props }: CommonProps) => (
  <div className={cn('[grid-column:2]', className)} {...props}>
    {children}
  </div>
);

// Content
// ---------------
/**
 * Component to wrap text content into (optimized for readability).
 */
export const Content = ({ className, children, ...props }: CommonProps) => (
  <div
    className={cn('[grid-column:2] max-w-[70ch] text-pretty', className)}
    {...props}
  >
    {children}
  </div>
);

// Breakout
// ---------------
/**
 * Component to break out of the regular container grid.
 * Spans to the full viewport width.
 */
export const Breakout = ({ className, children, ...props }: CommonProps) => (
  <div
    className={cn(
      '[grid-column:1/4] w-full',
      // Don't apply padding if <Breakout> has a <Container> child
      '[&:not(:has([data-container]))]:px-content',
      'md:[&:not(:has([data-container]))]:px-content-md',
      'xl:[&:not(:has([data-container]))]:px-content-xl',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
