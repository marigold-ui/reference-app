import { Link, useRouter } from '@tanstack/react-router';
import { Logo } from '../../components/Logo';

const unkebabify = (val: string) =>
  val
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const Navigation = () => {
  const router = useRouter();

  // Get all first level routes
  const routes = Object.keys(router.routesByPath).filter(route =>
    /**
     * ^\/: Asserts that the string starts with a forward slash.
     * [^\/]+$: Ensures that the rest of the string contains one or more characters
     *          that are not forward slashes, and this continues until the end of the string.
     */
    /^\/[^/]+$/.test(route)
  );

  return (
    <nav className="flex items-center gap-4">
      {routes.map(route => (
        <Link
          key={route}
          to={route}
          className="text-sm font-medium text-secondary-600 hover:text-secondary-900 lg:px-1"
        >
          {unkebabify(route.replaceAll('/', ''))}
        </Link>
      ))}
    </nav>
  );
};

export const Header = () => (
  <header className="sticky top-0 z-10 flex h-[--page-header-height] w-full items-center justify-between gap-2 border-0 border-b border-solid border-secondary-200 bg-bg-body px-[--page-padding] md:justify-normal md:px-[--page-padding-md] xl:px-[--page-padding-xl]">
    <Link className="md:pr-8" to="/">
      <Logo className="size-6" />
    </Link>
    <Navigation />
  </header>
);
