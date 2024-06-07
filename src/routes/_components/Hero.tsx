import { Breakout } from '@/components/Container';

export const Hero = () => (
  <Breakout
    className={[
      'relative min-h-[calc(100vh-var(--page-header-height))]',
      "bg-[linear-gradient(to_bottom,_var(--tw-gradient-stops)),url('/circuit-board.svg')] bg-repeat",
      'from-secondary-400/50 via-secondary-50 via-70% to-secondary-50',
    ].join(' ')}
  >
    <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-neutral-700/50 via-neutral-700/30 via-20% to-transparent" />

    <div className="mx-auto max-w-6xl pt-[8vh]">
      <h1 className="m-0 text-balance text-8xl tracking-tighter lg:text-9xl">
        Explore Design Patterns in React
      </h1>
      <p className="mt-4 max-w-[75%] text-pretty text-lg leading-normal text-secondary-400 lg:text-2xl">
        Discover a curated collection of tutorials with practical examples that
        showcase various design patterns and practices.
      </p>
    </div>

    <a
      className="absolute inset-x-0 bottom-1 grid place-items-center text-secondary-950 no-underline opacity-70 hover:opacity-100"
      href="#skip-content"
    >
      <span className="no-prose -mb-1.5 text-sm uppercase">Explore</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.25}
        stroke="currentColor"
        className="size-10 opacity-80"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </a>
  </Breakout>
);
