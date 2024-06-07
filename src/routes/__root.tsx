import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Container } from '@/components/Container';

import { Devtools } from './_components/Devtools';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';

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
    <Footer />
    <Devtools />
  </>
);

export const Route = createRootRoute({
  component: Layout,
});
