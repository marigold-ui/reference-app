import { StrictMode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { MarigoldProvider } from '@marigold/components';
import theme from '@marigold/theme-core';

import { routeTree } from './route-tree';

// Router
// ---------------
const router = createRouter({ routeTree });

// Query
// ---------------
const queryClient = new QueryClient();

// App
// ---------------
export const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MarigoldProvider theme={theme}>
        <RouterProvider router={router} />
      </MarigoldProvider>
    </QueryClientProvider>
  </StrictMode>
);
