import { expect } from 'vitest';
import { act, render } from '@testing-library/react';
import CompoundApp from './CompoundApp';
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

test('renders <CompoundApp /> correctly', async () => {
  const rootRoute = createRootRoute({
    component: () => <CompoundApp />,
  });

  const router = createRouter({
    routeTree: rootRoute,
  });

  const { container } = render(<RouterProvider router={router} />);

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  expect(container).toMatchSnapshot();
});
