import { type HighlightedCode, Pre } from 'codehike/code';
import { mark } from '@/utils/codehike/mark';

function CodeHikeWrapperComponent({
  codeblock,
}: {
  codeblock: HighlightedCode;
}) {
  return <Pre code={codeblock} handlers={[mark]} />;
}

export default CodeHikeWrapperComponent;
