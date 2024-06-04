import Breadcrumbs from './Breadcrumbs';

function BreadcrumbsExample() {
  return (
    <>
      <Breadcrumbs>
        <Breadcrumbs.Crumb href="/">Electronics</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/cellphones">Cell Phones</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb isCurrent={true} href="/cellphones/cases">
          Cases
        </Breadcrumbs.Crumb>
      </Breadcrumbs>
    </>
  );
}

export default BreadcrumbsExample;
