import { Link } from '@tanstack/react-router';
export const Footer = () => (
  <footer className="mt-48 flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
    <p className="text-xs text-secondary-500 dark:text-secondary-400">
      Build with 🧡 by the Design System Team
    </p>
    <nav className="flex gap-4 sm:ml-auto sm:gap-6">
      <Link
        // @ts-ignore
        to="https://www.marigold-ui.io/"
        className="text-xs underline-offset-4 hover:underline"
      >
        Marigold Docs
      </Link>
      <Link
        // @ts-ignore
        to="https://www.reservix.net/karriere/"
        className="text-xs underline-offset-4 hover:underline"
      >
        Reservix GmbH
      </Link>
    </nav>
  </footer>
);
