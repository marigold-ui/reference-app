import '@code-hike/mdx/styles';
import '../../css/custom-ch.css';
import StateManagementContent from './index.mdx';

function StateManagementApp() {
  return (
    <article className="pl-[--page-side-nav-width] pt-8 md:pl-[--page-side-nav-width-md] xl:md:pl-[--page-side-nav-width-xl]">
        <div>
            <StateManagementContent />
        </div>
    </article>
  );
}

export default StateManagementApp;
