import { createRootRoute, Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import { Devtools } from '@/components/Devtools';

const Layout = () => (
  <>
    <Header />
    <main
      className={[
        'grid grid-cols-content md:grid-cols-content-md xl:grid-cols-content-xl',
        'prose prose-docs max-w-none',
        'prose-code:before:content-none prose-code:after:content-none',
      ].join(' ')}
    >
      <div className="[grid-column:2]">
        <Outlet />
      </div>
    </main>
    <Devtools />
  </>
);

export const Route = createRootRoute({
  component: Layout,
});
