import { expect, test } from 'vitest';
import BreadcrumbsExample from './BreadcrumbsExample';
import { render } from '@testing-library/react';

test('Breadcrumbs are correctly rendered', () => {
  const { container } = render(<BreadcrumbsExample />);

  expect(container).toMatchSnapshot();
});
