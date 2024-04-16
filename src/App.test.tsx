import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('initial site', () => {
  render(<App />);

  expect(screen.getByText('Solve issues related to building reusable components')).toBeInTheDocument();
});
