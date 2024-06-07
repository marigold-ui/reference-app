import type { ReactElement } from 'react';

import { Card, Stack, Tiles } from '@marigold/components';
import { Link } from '@tanstack/react-router';

export interface TeaserCardProps {
  href: string;
  icon: ReactElement;
  title: string;
  caption: string;
}

export const TeaserCard = ({ href, icon, title, caption }: TeaserCardProps) => (
  <Link className="flex no-underline" href={href}>
    <Card variant="hovering" p={6}>
      <Stack space={2}>
        <div className="grid size-12 place-items-center rounded-full bg-bg-muted p-2">
          {icon}
        </div>
        <div className="text-balance text-2xl font-semibold tracking-tight lg:text-3xl">
          {title}
        </div>
        <div className="text-sm text-text-primary-muted">{caption}</div>
      </Stack>
    </Card>
  </Link>
);

export interface TeaserListProps {
  items: TeaserCardProps[];
}

export const TeaserList = ({ items }: TeaserListProps) => (
  <Tiles tilesWidth="400px" space={5}>
    {items.map(props => (
      <TeaserCard {...props} />
    ))}
  </Tiles>
);
