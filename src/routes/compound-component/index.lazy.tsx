import { createLazyFileRoute } from '@tanstack/react-router';

import Index from './index.mdx';

export const Route = createLazyFileRoute('/compound-component/')({
  component: Index,
});
