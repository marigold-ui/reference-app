import { createLazyFileRoute } from '@tanstack/react-router';
import theme from '@marigold/theme-core';
import { MarigoldProvider } from '@marigold/components';

import ServerStateExample from './_components/ServerStateExample';

export const Route = createLazyFileRoute('/state-management/preview')({
  component: () => (
    <MarigoldProvider theme={theme}>
      <ServerStateExample />
    </MarigoldProvider>
  ),
});
