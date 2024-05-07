import '@code-hike/mdx/styles';
import './css/custom-ch.css';
import CompoundComponentsApp from './components/compoundComponents/index.mdx';

function App() {
  return (
    <article className='pl-[--page-side-nav-width] md:pl-[--page-side-nav-width-md] xl:md:pl-[--page-side-nav-width-xl]'>
      <div>
        <CompoundComponentsApp />
      </div>
    </article>
  );
}

export default App;
