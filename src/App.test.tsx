import { render, screen } from '@testing-library/react';
import App from './App';

test('initial site', () => {
  render(<App />);

  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
