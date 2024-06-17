import { Breakout, Container, Block } from '@/components/Container';
import { TeaserList } from '@/components/TeaserCard';

export const Tutorials = () => (
  <Breakout id="skip-content" className="bg-primary-800/5 py-32">
    <Container>
      <Block>
        <div className="prose-lg pb-8">
          <h2 className="my-0 text-primary-950">Tutorials</h2>
          <p className="text-primary-950/60">
            Dive into our fun and easy-to-follow tutorials! Here’s a list of
            available guides to help you learn React step-by-step and boost your
            coding skills!
          </p>
        </div>
        <TeaserList
          items={[
            {
              title: 'Compound Components',
              href: '/compound-component',
              caption:
                'Learn how compound components can make your components more robust and customizable.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={16} y={16} width={6} height={6} rx={1} />
                  <rect x={2} y={16} width={6} height={6} rx={1} />
                  <rect x={9} y={2} width={6} height={6} rx={1} />
                  <path d="M5 16v-3a1 1 0 011-1h12a1 1 0 011 1v3M12 12V8" />
                </svg>
              ),
            },
            {
              title: 'State Management',
              href: '/state-management',
              caption:
                'Learn how compound components can enhance parent-child communication beyond prop drilling.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx={12} cy={5} rx={9} ry={3} />
                  <path d="M3 12a9 3 0 005 2.69M21 9.3V5" />
                  <path d="M3 5v14a9 3 0 006.47 2.88M12 12v4h4" />
                  <path d="M13 20a5 5 0 009-3 4.5 4.5 0 00-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
                </svg>
              ),
            },
          ]}
        />
      </Block>
    </Container>
  </Breakout>
);
