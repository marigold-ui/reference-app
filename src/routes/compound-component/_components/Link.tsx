import type { ComponentProps } from 'react';
import { cn } from '@marigold/system';

const VARIANTS = {
  default: '',
  cta: 'flex items-center h-7 rounded-sm bg-linear-to-tr from-purple-700 to-purple-500 px-2 text-white shadow-sm transition-transform hover:scale-110 no-underline',
};

export interface LinkProps extends ComponentProps<'a'> {
  variant?: keyof typeof VARIANTS;
}

export const Link = ({
  className,
  variant = 'default',
  children,
  ...props
}: LinkProps) => (
  <a {...props} className={cn(VARIANTS[variant], className)}>
    {children}
  </a>
);
