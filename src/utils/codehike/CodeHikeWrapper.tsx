import { type HighlightedCode, Pre } from 'codehike/code';
import { mark } from '@/utils/codehike/mark';
import { focus } from '@/utils/codehike/focus';

function CodeHikeWrapper({ codeblock }: { codeblock: HighlightedCode }) {
  return <Pre code={codeblock} handlers={[mark, focus]} />;
}

export default CodeHikeWrapper;
