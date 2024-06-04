import { createLazyFileRoute } from '@tanstack/react-router';
import BreadcrumbsExample from './_components/BreadcrumbsExample';

export const Route = createLazyFileRoute(
  '/compound-component/preview/breadcrumbs'
)({
  component: BreadcrumbsExample,
});
