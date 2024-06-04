import { createLazyFileRoute } from '@tanstack/react-router';
import App from '../components/App';

export const Route = createLazyFileRoute('/')({
  component: App,
});
