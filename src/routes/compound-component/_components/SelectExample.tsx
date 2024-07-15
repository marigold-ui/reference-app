import {
  FieldGroup,
  Inline,
  MarigoldProvider,
  OverlayContainerProvider,
  Select,
  Text,
} from '@marigold/components';
import theme from '@marigold/theme-core';

const Indicator = ({ color }: { color: string }) => (
  <span
    className={`size-3 rounded-full border border-solid border-white ${color}`}
  />
);

const options = [
  {
    id: 'backlog',
    label: 'Backlog',
    color: 'bg-gray-500',
  },
  {
    id: 'in-progress',
    label: 'In Progress',
    color: 'bg-blue-500',
  },
  {
    id: 'in-review',
    label: 'In Review',
    color: 'bg-yellow-500',
  },
  {
    id: 'done',
    label: 'Done',
    color: 'bg-green-500',
  },
  {
    id: 'wont-do',
    label: "Won't do",
    color: 'bg-red-500',
  },
];

const Example = () => (
  <Select label="Status" width="3/4" disabledKeys={['wont-do']}>
    {options.map(o => (
      <Select.Option key={o.id} id={o.id}>
        <Inline space={2} alignY="center">
          <Indicator color={o.color} />
          <Text>{o.label}</Text>
        </Inline>
      </Select.Option>
    ))}
  </Select>
);

const App = () => (
  <OverlayContainerProvider value="portalContainer">
    <MarigoldProvider theme={theme}>
      <FieldGroup labelWidth="200px">
        <Example />
      </FieldGroup>
    </MarigoldProvider>
  </OverlayContainerProvider>
);

export default App;
