import { type HighlightedCode, Pre } from 'codehike/code';
import { mark } from '@/utils/codehike/mark';
import { focus } from '@/utils/codehike/focus';
import { tokenTransitions } from '@/utils/codehike/scrollycoding/token-transition';

function CodeHikeWrapper({ codeblock }: { codeblock: HighlightedCode }) {
  // we don't want use-v1 as filename - can be removed when done with migrating
  if (codeblock.meta === 'use-v1') {
    return (
      <Pre
        code={codeblock}
        handlers={[mark, focus, tokenTransitions]}
        className="min-h-[40rem]"
      />
    );
  }

  return (
    <div className="rounded bg-zinc-950 px-4">
      <div className="py-2 text-center text-sm text-zinc-400">
        {codeblock.meta}
      </div>
      <Pre
        code={codeblock}
        handlers={[mark, focus, tokenTransitions]}
        className="min-h-[40rem]"
      />
    </div>
  );
}

export default CodeHikeWrapper;
