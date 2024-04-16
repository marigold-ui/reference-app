import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {routeTree} from './routeTree.gen';
import {createRouter, RouterProvider} from '@tanstack/react-router';
import {MarigoldProvider} from '@marigold/components';
import theme from '@marigold/theme-core';

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
   ReactDOM.createRoot(rootElement).render(
        <StrictMode>
            <MarigoldProvider theme={theme}>
                <RouterProvider router={router} />
            </MarigoldProvider>
        </StrictMode>
   )
}
