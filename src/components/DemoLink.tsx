import { Link } from '@tanstack/react-router';
import { ExternalLink } from '@marigold/icons';
import type { ComponentProps, ReactNode } from 'react';

export interface DemoLinkProps extends ComponentProps<typeof Link> {
  children?: ReactNode;
}

const DemoLink = ({ children, ...props }: DemoLinkProps) => {
  return (
    <div className="w-fit">
      <Link
        {...props}
        target="_blank"
        className="flex-1 cursor-pointer rounded-md border-2 border-solid bg-white p-2 align-baseline font-black text-gray-800 hover:bg-gray-300"
      >
        {children}
        <ExternalLink size={20} className="ml-1.5 align-top" />
      </Link>
    </div>
  );
};

export default DemoLink;
