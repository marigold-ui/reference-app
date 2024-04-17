import { createLazyFileRoute } from '@tanstack/react-router';
import Example from '../components/Example/Example';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

//TODO: just an example can be removed
function About() {
  return <Example />
}
