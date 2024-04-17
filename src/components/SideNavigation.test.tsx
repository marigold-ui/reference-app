import {act, render, screen} from '@testing-library/react';
import { SideNavigation } from './SideNavigation';
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { expect } from 'vitest';


test('renders navigation links', async () => {
    const rootRoute = createRootRoute({
        component: () => <SideNavigation />,
    });

  const router = createRouter({
    routeTree: rootRoute,
  });

  render(<RouterProvider router={router} />);

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

    const links = screen.getAllByRole('link');

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(links[0]).toHaveAttribute('href', '/');
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(links[1]).toHaveAttribute('href', '/about');
});
