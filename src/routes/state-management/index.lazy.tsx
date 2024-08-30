import { createLazyFileRoute } from '@tanstack/react-router';

import Index from './index.mdx';
import Title from '@/components/Title';
import CodeHikeWrapper from '@/utils/codehike/CodeHikeWrapper';

export const Route = createLazyFileRoute('/state-management/')({
  component: () => (
    <>
      <Title
        title="State Management"
        caption="Learn to structure and maintain your state effectively."
        image={{ url: '/floating-cogs.svg', size: '10%' }}
      />
      <Index components={{ CodeHikeWrapper }} />
    </>
  ),
});
