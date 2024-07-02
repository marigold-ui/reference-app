import { createLazyFileRoute } from '@tanstack/react-router';
import theme from '@marigold/theme-core';
import { MarigoldProvider } from '@marigold/components';

import { Block } from '@/components/Container';
import ServerStateExample from './_components/ServerStateExample';

export const Route = createLazyFileRoute('/state-management/preview')({
  component: () => (
    <Block data-theme="core">
      <MarigoldProvider theme={theme}>
        <ServerStateExample />
      </MarigoldProvider>
    </Block>
  ),
});
