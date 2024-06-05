import { createLazyFileRoute } from '@tanstack/react-router';
import ServerStateExample from './_components/ServerStateExample';

export const Route = createLazyFileRoute('/state-management/preview')({
  component: ServerStateExample,
});
