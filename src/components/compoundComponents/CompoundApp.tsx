import '@code-hike/mdx/styles';
import '../../css/custom-ch.css';
import CompoundComponentsContent from './index.mdx';

function CompoundApp() {
  return (
    <article className="pl-[--page-side-nav-width] pt-8 md:pl-[--page-side-nav-width-md] xl:md:pl-[--page-side-nav-width-xl]">
      <div>
        <CompoundComponentsContent />
      </div>
    </article>
  );
}

export default CompoundApp;
