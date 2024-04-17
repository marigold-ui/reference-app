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
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-y-0 border-l-0 border-r border-solid border-indigo-500 transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-50 py-4">
        <ul className="list-none space-y-2 p-0 font-medium">
          {navItems.map((item: NavItem) => (
            <li>
              <Link
                to={item.linkTo}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white [&.active]:font-bold"
              >
                <span className="ms-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
