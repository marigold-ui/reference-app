import { createLazyFileRoute } from '@tanstack/react-router';
import TabsExample from './_components/TabsExample';

export const Route = createLazyFileRoute('/compound-component/preview/tabs')({
  component: TabsExample,
});
