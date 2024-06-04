import { expect } from 'vitest';
import { render } from '@testing-library/react';
import { Logo } from './Logo';

test('renders <Logo /> correctly', () => {
  const { container } = render(<Logo />);

  expect(container).toMatchSnapshot();
});
