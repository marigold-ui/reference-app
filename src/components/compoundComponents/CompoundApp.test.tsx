import { expect } from 'vitest';
import { render } from '@testing-library/react';
import CompoundApp from './CompoundApp';

test('renders <CompoundApp /> correctly', () => {
  const { container } = render(<CompoundApp />);

  expect(container).toMatchSnapshot();
});
