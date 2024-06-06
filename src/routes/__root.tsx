import { createRootRoute, Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import { Container } from '@/components/Container';
import { Devtools } from '@/components/Devtools';

const Layout = () => (
  <>
    <Header />
    <Container
      className={[
        'prose prose-docs max-w-none',
        'prose-code:before:content-none prose-code:after:content-none',
      ].join(' ')}
    >
      <Outlet />
    </Container>
    <Devtools />
  </>
);

export const Route = createRootRoute({
  component: Layout,
});
