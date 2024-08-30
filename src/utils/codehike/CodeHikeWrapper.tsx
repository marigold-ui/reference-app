import { type HighlightedCode, Pre } from 'codehike/code';
import { mark } from '@/utils/codehike/mark';
import { focus } from '@/utils/codehike/focus';
import { tokenTransitions } from '@/utils/codehike/scrollycoding/token-transition';

function CodeHikeWrapper({ codeblock }: { codeblock: HighlightedCode }) {
  console.log(JSON.stringify(codeblock));
  return <Pre code={codeblock} handlers={[mark, focus, tokenTransitions]} />;
}

export default CodeHikeWrapper;
