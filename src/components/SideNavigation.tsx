import { Link } from '@tanstack/react-router';

type NavItem = {
  linkTo: string;
  name: string;
};

export const SideNavigation = () => {
  const navItems: NavItem[] = [
    {
      linkTo: '/',
      name: 'Home',
    },
    {
      linkTo: '/about',
      name: 'About',
    },
  ];

  return (
    <aside
      id="default-sidebar"
      className="fixed left-0 top-[--page-header-height] z-40 h-screen w-[--page-side-nav-absolute-width] -translate-x-full border-y-0 border-l-0 border-r border-solid border-gray-200 transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-50 py-4">
            <ul className="list-none space-y-2 border-l border-gray-600 p-0 ">
              {navItems.map((item: NavItem) => (
                  <li key={item.linkTo}>
                    <Link
                        to={item.linkTo}
                        className="group flex items-center rounded-lg p-2 text-xl text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white [&.active]:font-bold"
                    >
                      <span className="ms-[--page-side-nav-padding] md:ms-[--page-side-nav-padding-md] xl:ms-[--page-side-nav-padding-xl]">{item.name}</span>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
    </aside>
);
};
