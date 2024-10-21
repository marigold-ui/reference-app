import { z } from 'zod';
import {
  Selectable,
  Selection,
  SelectionProvider,
} from 'codehike/utils/selection';
import { Block, HighlightedCodeBlock, parseProps } from 'codehike/blocks';
import CodeHikeWrapper from '@/utils/codehike/CodeHikeWrapper';

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: HighlightedCodeBlock })),
});

export function Scrollycoding(props: unknown) {
  const { steps } = parseProps(props, Schema);
  return (
    <SelectionProvider className="flex gap-4">
      <div className="flex-1 mt-32 mb-[90vh] ml-2 prose prose-invert">
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={['click', 'scroll']}
            className="border-l-4 border-zinc-700 data-[selected=true]:border-blue-400 px-5 py-2 mb-24 rounded bg-zinc-900"
          >
            <h2 className="mt-4 text-xl">{step.title}</h2>
            <div>{step.children}</div>
          </Selectable>
        ))}
      </div>
      <div className="w-[40vw] max-w-xl bg-zinc-900">
        <div className="top-16 sticky overflow-auto">
          <Selection
            from={steps.map(step => {
              return <CodeHikeWrapper codeblock={step.code} />;
            })}
          />
        </div>
      </div>
    </SelectionProvider>
  );
}
