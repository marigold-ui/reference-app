import { CH } from '@code-hike/mdx/components';
import type { ReactNode } from 'react';

export interface PreviewProps {
  children?: ReactNode;
}

const CodeHikePreview = CH['Preview'];

export const Preview = ({ children }: PreviewProps) => (
  // @ts-ignore
  <CodeHikePreview>
    <div data-theme="core" className="*:px-14 *:py-12">
      {children}
    </div>
  </CodeHikePreview>
);

export default Preview;
