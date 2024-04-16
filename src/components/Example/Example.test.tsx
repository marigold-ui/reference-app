import { render, screen } from '@testing-library/react';
import Example from './Example';

test('initial site', () => {
  render(<Example />);

  expect(screen.getByText('Stubborn Attachments')).toBeInTheDocument();
});
