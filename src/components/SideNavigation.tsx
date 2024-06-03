import { Link } from '@tanstack/react-router';

type Item = {
  linkTo: string;
  name: string;
};

type NavItem = {
  group: string;
  items: Item[];
};

export const SideNavigation = () => {
  const navItems: NavItem[] = [
    {
      group: '',
      items: [
        {
          linkTo: '/',
          name: 'Welcome',
        },
      ],
    },
    {
      group: 'Patterns',
      items: [
        {
          linkTo: '/compoundComponent',
          name: 'Compound Component',
        },
        {
          linkTo: '/state-management',
          name: 'state-management',
        },
      ],
    },
  ];

  return (
    <nav
      id="default-sidebar"
      className="fixed left-0 top-[--page-header-height] z-40 h-screen w-[--page-side-nav-absolute-width] -translate-x-full border-y-0 border-l-0 border-r border-solid border-gray-200 transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-50 py-4">
        {navItems.map((items: NavItem) => {
          return (
            <>
              <div className="mr-12 ms-[--page-side-nav-padding] md:ms-[--page-side-nav-padding-md] xl:ms-[--page-side-nav-padding-xl]">
                {items.group && (
                  <span className="block pt-5 text-sm font-semibold text-gray-700">
                    {items.group}
                  </span>
                )}
                {items.items.map((item: Item) => {
                  return (
                    <div className="border-secondary-300 ml-0.5 flex flex-col border-l">
                      <Link
                        to={item.linkTo}
                        className="flex items-center border-0 border-l border-solid border-border-inverted py-2 text-sm font-medium text-gray-700 [&.active]:border-border-brand [&.active]:font-bold [&.active]:text-brand-600"
                      >
                        <span className="ms-[--page-side-nav-padding] md:ms-[--page-side-nav-padding-md] xl:ms-[--page-side-nav-padding-xl]">
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </nav>
  );
};
