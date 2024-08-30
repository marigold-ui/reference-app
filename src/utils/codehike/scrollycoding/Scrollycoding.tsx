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
      <div className="prose mb-[90vh] ml-2 mt-6 flex-1">
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={['click', 'scroll']}
            className="bg-card rounded border-l-4 px-5 py-2 data-[selected=true]:border-blue-400"
          >
            <h2 className="mt-4 text-xl">{step.title}</h2>
            <div>{step.children}</div>
          </Selectable>
        ))}
      </div>
      <div className="bg-card w-[40vw] max-w-xl">
        <div className="sticky top-16 overflow-auto">
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
