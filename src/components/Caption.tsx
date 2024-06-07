import type { ReactNode } from '@tanstack/react-router';

export interface CaptionProps {
  children?: ReactNode;
}

const Caption = ({ children }: CaptionProps) => (
  <div className="not-prose -mt-8 mb-24 text-lg text-text-primary-muted">
    {children}
  </div>
);

export default Caption;
