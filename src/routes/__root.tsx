import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React, {Suspense} from 'react';

const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? () => null // Render nothing in production
        : React.lazy(() =>
            // Lazy load in development
            import('@tanstack/router-devtools').then((res) => ({
                default: res.TanStackRouterDevtools,
                // For Embedded Mode
                // default: res.TanStackRouterDevtoolsPanel
            })),
        )

export const Route = createRootRoute({
    component: () => (
        <>
            <aside id="default-sidebar"
                   className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-y-0 border-l-0 border-r border-solid border-indigo-500 transition-transform sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full overflow-y-auto bg-gray-50 py-4">
                    <ul className="list-none space-y-2 p-0 font-medium">
                        <li>
                            <Link to="/" className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white [&.active]:font-bold">
                                <span className="ms-3">Home</span>
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/about" className="[&.active]:font-bold">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="bg-gray-50">
                <Outlet/>
                <Suspense>
                    <TanStackRouterDevtools/>
                </Suspense>
            </div>
        </>
    ),
})