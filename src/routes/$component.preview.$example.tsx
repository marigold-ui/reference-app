import { createFileRoute } from '@tanstack/react-router';
import Preview from '../components/Preview';

export const Route = createFileRoute('/$component/preview/$example')({
  component: () => <Preview />
})
