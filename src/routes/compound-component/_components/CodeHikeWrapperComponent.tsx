import { type HighlightedCode, Pre } from 'codehike/code';
import { callout } from '@/utils/codehike/callout';
import { mark } from '@/utils/codehike/mark';

function CodeHikeWrapperComponent({
  codeblock,
}: {
  codeblock: HighlightedCode;
}) {
  return <Pre code={codeblock} handlers={[callout, mark]} />;
}

export default CodeHikeWrapperComponent;
