import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('initial site', () => {
  render(<App />);

  expect(
    screen.getByText('WIP: Welcome to the Reference App!')
  ).toBeInTheDocument();
});
