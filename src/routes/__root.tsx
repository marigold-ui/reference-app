import { createRootRoute, Outlet } from '@tanstack/react-router'
import React, {Suspense} from 'react';
import {SideNavigation} from '../components/SideNavigation';

const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? () => null
        : React.lazy(() =>
            import('@tanstack/router-devtools').then((res) => ({
                default: res.TanStackRouterDevtools,
            })),
        )

export const Route = createRootRoute({
    component: () => (
        <>
            <SideNavigation />
            <div className="bg-gray-50">
                <Outlet/>
                <Suspense>
                    <TanStackRouterDevtools/>
                </Suspense>
            </div>
        </>
    ),
})