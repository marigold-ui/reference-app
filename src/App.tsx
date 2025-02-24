import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import { MarigoldProvider } from '@marigold/components';
import theme from '@marigold/theme-docs';

import { routeTree } from './route-tree';

// Router
// ---------------
const router = createRouter({ routeTree });

router.subscribe('onLoad', () => {
  window.scrollTo(0, 0);
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Query
// ---------------
const queryClient = new QueryClient();

// App
// ---------------
export const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div data-theme="docs">
        <MarigoldProvider theme={theme}>
          <RouterProvider router={router} />
        </MarigoldProvider>
      </div>
      <Analytics />
    </QueryClientProvider>
  </StrictMode>
);
