import { createLazyFileRoute } from '@tanstack/react-router';

import { Block } from '@/components/Container';
import Index from './index.mdx';

export const Route = createLazyFileRoute('/state-management/')({
  component: () => (
    <Block>
      <Index />
    </Block>
  ),
});
