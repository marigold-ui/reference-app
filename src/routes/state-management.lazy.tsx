import { createLazyFileRoute } from '@tanstack/react-router';
import { StateManagement } from '../components/state-management/state-management';

export const Route = createLazyFileRoute('/state-management')({
  component: StateManagement
});


