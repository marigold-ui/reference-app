import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

test('smoketest', async () => {
  const Component = () => <div data-testid="test">this is just a test</div>;
  render(<Component />);

  const cmp = screen.getByTestId('test');

  expect(cmp).toBeInTheDocument();
});
