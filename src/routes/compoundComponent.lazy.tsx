import { createLazyFileRoute } from '@tanstack/react-router';
import CompoundApp from '../components/compoundComponents/CompoundApp';

export const Route = createLazyFileRoute('/compoundComponent')({
  component: CompoundComponent,
});

function CompoundComponent() {
  return <CompoundApp />;
}
