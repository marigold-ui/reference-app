import { createLazyFileRoute } from '@tanstack/react-router';
import Content from './index.mdx';

export const Route = createLazyFileRoute('/state-management/')({
  component: Content,
});
