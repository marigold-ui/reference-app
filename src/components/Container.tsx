import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@marigold/system';

export interface ContentCommonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

// Container
// ---------------
export const Container = ({
  className,
  children,
  ...props
}: ContentCommonProps) => (
  <div
    data-container=""
    className={cn(
      'grid grid-cols-content md:grid-cols-content-md xl:grid-cols-content-xl',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Content
// ---------------
export const Content = ({
  className,
  children,
  ...props
}: ContentCommonProps) => (
  <div className={cn('[grid-column:2]', className)} {...props}>
    {children}
  </div>
);

// Breakout
// ---------------
export const Breakout = ({
  className,
  children,
  ...props
}: ContentCommonProps) => (
  <div
    className={cn(
      '[grid-column:1/4]',
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
