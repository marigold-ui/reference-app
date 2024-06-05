import type { ReactNode } from 'react';

function Breadcrumbs({ children }: { children: ReactNode }) {
  return (
    <nav aria-label="Breadcrumbs">
      <ol className="m-0 list-none p-0">{children}</ol>
    </nav>
  );
}

function Crumb({
  href,
  isCurrent = false,
  children,
}: {
  href: string;
  isCurrent?: boolean;
  children: ReactNode;
}) {
  return (
    <li className="mr-3 inline before:content-['/'] before:first-of-type:content-['']">
      <a
        href={href}
        aria-current={isCurrent && 'page'}
        className="text-decoration-none hover:text-decoration:revert ml-3 hover:underline"
        onClick={e => e.preventDefault()}
      >
        {children}
      </a>
    </li>
  );
}

Breadcrumbs.Crumb = Crumb;

export default Breadcrumbs;
