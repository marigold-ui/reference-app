import { expect } from 'vitest';
import Header from './Header';
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { act, render } from '@testing-library/react';

test('renders <Header /> correctly', async () => {
  const rootRoute = createRootRoute({
    component: () => <Header />,
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
