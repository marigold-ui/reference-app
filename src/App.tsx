import { StrictMode } from 'react';

import { MarigoldProvider } from '@marigold/components';
import theme from '@marigold/theme-core';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

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
