import BreadcrumbsExample from './compoundComponents/Breadcrumbs/BreadcrumbsExample';
import TabsExample from './compoundComponents/Tabs/TabsExample';
import ServerStateExample from './state-management/ServerState/ServerStateExample';
import {Route} from '../routes/$component.preview.$example';
import BackButton from './BackButton';

const components =  {
    BreadcrumbsExample,
    TabsExample,
    ServerStateExample,
}

const Preview = () => {
    const {example} = Route.useParams();
    const PreviewComponent = components[example as keyof typeof components];

    return (
        <article className="article-content">
            <BackButton />
            <PreviewComponent/>
        </article>
    )
}

export default Preview;