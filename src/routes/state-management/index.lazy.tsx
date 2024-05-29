import { createLazyFileRoute } from '@tanstack/react-router';
import StateManagementApp from '../../components/state-management/StateManagementApp';

export const Route = createLazyFileRoute('/state-management/')({
  component: StateManagementApp,
});
