import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

//TODO: just an example can be removed
function About() {
  return <>All about this site</>;
}
