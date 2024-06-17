import { Block } from '@/components/Container';
import { Columns, Message } from '@marigold/components';
import { Link } from '@tanstack/react-router';

export const About = () => (
  <Block className="prose-lg text-pretty py-20">
    <Columns columns={[1, 1]} space={24} collapseAt="900px">
      <div>
        <h2>About</h2>
        <p>
          The main purpose of this site is to provide an overview of common
          patterns and practices in ReactJS through simple examples. We address
          specific issues and challenges, such as managing state and handling
          forms, and demonstrate these in conjunction with the{' '}
          <Link href="https://www.marigold-ui.io/">Marigold Design System</Link>{' '}
          where applicable.
        </p>
      </div>
      <div>
        <h2>Mission</h2>
        <p>
          The tutorials teach you how to apply React patterns directly to our
          daily projects. From managing state to integrating design systems like
          Marigold, these tutorials offer practical solutions. By applying these
          learned patterns, you can make your daily coding tasks smoother and
          more enjoyable.
        </p>
      </div>
    </Columns>
    <div className="mx-auto grid max-w-screen-sm place-items-center pt-32">
      <Message variant="info" messageTitle="Feedback">
        <p className="mb-4">
          If you have any suggestions for patterns that we should add, or if you
          some your own code could become a valuable addition here, we'd love to
          hear from you!
        </p>
        <p>
          Your feedback, ideas, and suggestions for improvement are always
          welcome. Feel free to reach out to us through any of{' '}
          <Link href="https://www.marigold-ui.io/introduction/get-in-touch">
            our communication channels
          </Link>
          .
        </p>
      </Message>
    </div>
  </Block>
);
