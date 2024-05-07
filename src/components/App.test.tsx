import { expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test('renders <App /> correctly', () => {
  const { container } = render(<App />);

  expect(
    container).toMatchSnapshot();
});
