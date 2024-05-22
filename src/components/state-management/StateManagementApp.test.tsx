import { expect } from 'vitest';
import { render } from '@testing-library/react';
import StateManagementApp from './StateManagementApp';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MarigoldProvider } from '@marigold/components';
import theme from '@marigold/theme-core';

test('renders <StateManagementApp /> correctly', () => {
  const queryClient = new QueryClient();
  const { container } = render(
    <MarigoldProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <StateManagementApp />
      </QueryClientProvider>
    </MarigoldProvider>
  );

  expect(container).toMatchSnapshot();
});
