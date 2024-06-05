import { createRootRoute, Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import { Devtools } from '@/components/Devtools';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Devtools />
  </>
);

export const Route = createRootRoute({
  component: Layout,
});
