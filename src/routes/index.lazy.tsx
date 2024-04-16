import { createLazyFileRoute } from '@tanstack/react-router'
import App from '../App';

//TODO: Layout SIdebar
//TODO: DEvTools nur in dev
export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <App />
    )
}