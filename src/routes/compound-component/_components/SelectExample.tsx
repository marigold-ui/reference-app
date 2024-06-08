import { FieldGroup, MarigoldProvider, Select } from '@marigold/components';
import theme from '@marigold/theme-core';
import { useState, type Key } from 'react';

const Example = () => {
  const [, setSelected] = useState<Key>();

  return (
    <Select
      label="Select your favorite franchise"
      onChange={setSelected}
      disabledKeys={['star-trek']}
    >
      <Select.Option id="harry-potter">Harry Potter</Select.Option>
      <Select.Option id="lord-of-the-rings">Lord of the Rings</Select.Option>
      <Select.Option id="star-wars">Star Wars</Select.Option>
      <Select.Option id="star-trek">Star Trek</Select.Option>
      <Select.Option id="firefly">Firefly</Select.Option>
    </Select>
  );
};

const App = () => (
  <MarigoldProvider theme={theme}>
    <FieldGroup labelWidth="200px">
      <Example />
    </FieldGroup>
  </MarigoldProvider>
);

export default App;
