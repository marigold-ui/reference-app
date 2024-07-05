import { createLazyFileRoute } from '@tanstack/react-router';

import { Block } from '@/components/Container';
import ServerStateExample from './_components/ServerStateExample';

export const Route = createLazyFileRoute('/state-management/preview')({
  component: () => (
    <Block data-theme="core">
        <ServerStateExample />
    </Block>
  ),
});
