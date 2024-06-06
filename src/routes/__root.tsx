import { createRootRoute, Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import { Devtools } from '@/components/Devtools';

const Layout = () => (
  <>
    <Header />
    <main
      className={[
        'prose prose-docs mx-auto max-w-[1300px]',
        'prose-code:before:content-none prose-code:after:content-none',
        'px-[--page-padding] md:px-[--page-padding-md] xl:px-[--page-padding-xl]',
      ].join(' ')}
    >
      <Outlet />
    </main>
    <Devtools />
  </>
);

export const Route = createRootRoute({
  component: Layout,
});
