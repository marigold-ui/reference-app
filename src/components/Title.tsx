import type { ReactNode } from 'react';
import { Breakout } from './Container';

export interface TitleProps {
  title?: ReactNode;
  caption?: ReactNode;
  image?: {
    url: string;
    size?: string;
  };
}

export const Title = ({ title, caption, image }: TitleProps) => (
  <Breakout
    className={[
      'relative grid place-items-center',
      'bg-[linear-gradient(to_bottom,_var(--tw-gradient-stops)),var(--bg-image)] bg-repeat [background-size:auto,var(--bg-size)]',
      'from-primary-800/25 via-secondary-50 via-70% to-secondary-50',
    ].join(' ')}
    style={
      {
        '--bg-image': image ? `url(${image.url})` : undefined,
        '--bg-size': image ? `${image.size || 'auto'}` : undefined,
      } as any
    }
  >
    <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-neutral-700/50 via-neutral-700/10 via-20% to-transparent" />

    <div className="px-20 pb-32 pt-52 text-center [background-image:radial-gradient(ellipse_at_bottom,rgba(248,250,252,1)_0%,rgba(248,250,252,1)_40%,transparent_70%)]">
      <h1 className="p-0 text-secondary-950">{title}</h1>
      <div className="-mt-8 text-lg text-secondary-950/60">{caption}</div>
    </div>
  </Breakout>
);

export default Title;
