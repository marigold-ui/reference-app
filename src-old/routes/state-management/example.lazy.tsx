import { createLazyFileRoute } from '@tanstack/react-router';
import ServerStateExample from '../../components/state-management/ServerState/ServerStateExample';

export const Route = createLazyFileRoute('/state-management/example')({
  component: ServerStateExample,
});
