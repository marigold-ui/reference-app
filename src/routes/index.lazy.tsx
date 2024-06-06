import { createLazyFileRoute } from '@tanstack/react-router';

import { Breakout, Content } from '@/components/Container';

const Page = () => {
  return (
    <>
      <Breakout
        className={[
          "relative bg-[linear-gradient(to_bottom,_var(--tw-gradient-stops)),url('/circuit-board.svg')] bg-repeat",
          'from-secondary-400/50 via-secondary-50 via-60% to-secondary-50',
        ].join(' ')}
      >
        <div className="mx-auto min-h-[calc(100vh-var(--page-header-height))] max-w-6xl">
          <h1 className="mb-0 text-balance text-8xl tracking-tighter lg:pt-48 lg:text-9xl">
            Explore Design Patterns in React
          </h1>
          <p className="mt-4 max-w-[75%] text-pretty text-lg leading-normal text-secondary-400 lg:text-2xl">
            Discover a curated collection of tutorials with practical examples
            that showcase various design patterns and practices.
          </p>
        </div>

        <a
          className="absolute inset-x-0 bottom-0 grid place-items-center text-secondary-950 no-underline opacity-20 hover:opacity-40"
          href="#skip-content"
        >
          <span className="no-prose -mb-4 text-xs uppercase">Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-20 opacity-30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </Breakout>
      <Content id="skip-content">
        <h2>Patterns</h2>

        <h2>How to use the React Reference App?</h2>
        <p>
          Using the React Reference App is straightforward. Each pattern or
          practice is presented with a detailed explanation and code examples.
          You can copy these code examples directly into your own projects. To
          do this, simply click the copy button (
          <button
            type="button"
            title="Copy code"
            className="ch-editor-button"
            style={{ verticalAlign: 'bottom', marginRight: '0px' }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6px"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
          ) in the code snippet. Clicking this button will copy the code to your
          clipboard, ready to be pasted into your own code editor.
        </p>
      </Content>
    </>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Page,
});
