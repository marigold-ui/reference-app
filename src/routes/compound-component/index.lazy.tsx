import { createLazyFileRoute } from '@tanstack/react-router';

import Title from '@/components/Title';
import Index from './index.mdx';

export const Route = createLazyFileRoute('/compound-component/')({
  component: () => (
    <>
      <Title
        title="Compound Components"
        caption="Learn how compound components can make your components more robust and customizable."
        image={{ url: '/hideout.svg', size: '10%' }}
      />
      <Index />
    </>
  ),
});
