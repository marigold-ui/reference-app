import { createLazyFileRoute } from '@tanstack/react-router';

import { Content } from '@/components/Container';
import { Hero } from './_components/Hero';
import { Tutorials } from './_components/Tutorials';

const Page = () => {
  return (
    <>
      <Hero />
      <Tutorials />
      <Content id="skip-content">
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
