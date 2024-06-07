import { createLazyFileRoute } from '@tanstack/react-router';

import { Content } from '@/components/Container';
import { Hero } from './_components/Hero';
import { Tutorials } from './_components/Tutorials';
import { About } from './_components/About';

const Page = () => {
  return (
    <>
      <Hero />
      <Tutorials />
      <About />
    </>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Page,
});
