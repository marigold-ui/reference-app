import { createLazyFileRoute } from '@tanstack/react-router';

const Page = () => {
  return (
    <div className="bg-[url('/circuit-board.svg')] bg-repeat [grid-column:1/4]">
      <h1 className="text-9xl tracking-tighter">
        Explore Design Patterns in React
      </h1>
    </div>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Page,
});
