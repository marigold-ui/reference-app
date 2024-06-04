import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, lazy } from 'react';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then(res => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Devtools = () => (
  <Suspense>
    <TanStackRouterDevtools />
    <ReactQueryDevtools />
  </Suspense>
);
