import { createRootRoute, Outlet } from '@tanstack/react-router';
import { SideNavigation } from '@/components/SideNavigation';
import Header from '@/components/Header';
import { Devtools } from '@/components/Devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <SideNavigation />
      <div className="bg-gray-50">
        <article className="pl-[--page-side-nav-width] pt-8 md:pl-[--page-side-nav-width-md] xl:md:pl-[--page-side-nav-width-xl]">
          <Outlet />
        </article>
        <Devtools />
      </div>
    </>
  ),
});
