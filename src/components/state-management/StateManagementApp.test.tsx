import { expect } from 'vitest';
import { act, render } from '@testing-library/react';
import StateManagementApp from './StateManagementApp';
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

test('renders <StateManagementApp /> correctly', async () => {
  const rootRoute = createRootRoute({
    component: () => <StateManagementApp />,
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
