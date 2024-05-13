import { createLazyFileRoute } from '@tanstack/react-router';
import StateManagement from '../components/state-management/index.mdx';

export const Route = createLazyFileRoute('/state-management')({
  component: StateManagement
});


