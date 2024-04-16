import { expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import BreadcrumbsExample from './BreadcrumbsExample';

test('Breadcrumbs are correctly rendered', () => {
    const tree = renderer
        .create(<BreadcrumbsExample />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
