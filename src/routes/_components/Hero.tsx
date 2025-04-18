import { Breakout } from '@/components/Container';

export const Hero = () => (
  <Breakout
    className={[
      'relative min-h-[calc(100dvh-var(--page-header-height))]',
      ' bg-repeat',
      'from-primary-800/25 via-secondary-50 via-70% to-secondary-50',
    ].join(' ')}
    style={{
      backgroundImage:
        "linear-gradient(to bottom, var(--tw-gradient-stops, rgba(100, 51, 2, 0.25) 20%, rgba(248, 250, 252, 50) 70%)), url('/topography.svg')",
    }}
  >
    <div className="absolute inset-x-0 top-0 h-8 bg-linear-to-b from-neutral-700/50 via-neutral-700/30 via-20% to-transparent" />

    <div className="mx-auto max-w-6xl pt-[4dvh] md:pt-[8dvh] pl-8">
      <h1 className="m-0 text-balance text-7xl tracking-tighter text-primary-950 md:text-8xl lg:text-9xl pt-32 ">
        Explore Design Patterns in React
      </h1>
      <p className="mt-4 max-w-[75%] text-pretty text-lg leading-normal text-primary-950/60 lg:text-2xl">
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
