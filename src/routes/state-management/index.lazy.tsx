import { createLazyFileRoute } from '@tanstack/react-router';

import { Content } from '@/components/Container';
import Index from './index.mdx';

export const Route = createLazyFileRoute('/state-management/')({
  component: () => (
    <Content>
      <Index />
    </Content>
  ),
});
