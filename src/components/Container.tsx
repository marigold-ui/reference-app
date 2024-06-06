import type { ReactNode } from 'react';
import { cn } from '@marigold/system';

export interface ContentCommonProps {
  className?: string;
  children?: ReactNode;
}

export const Container = ({ className, children }: ContentCommonProps) => (
  <div
    className={cn(
      'grid grid-cols-content md:grid-cols-content-md xl:grid-cols-content-xl',
      className
    )}
  >
    {children}
  </div>
);

export const Content = ({ className, children }: ContentCommonProps) => (
  <div className={cn('[grid-column:2]', className)}>{children}</div>
);

export const Breakout = ({ className, children }: ContentCommonProps) => (
  <div
    className={cn(
      '[grid-column:1/4]',
      'px-content md:px-content-md xl:px-content-xl',
      className
    )}
  >
    {children}
  </div>
);
