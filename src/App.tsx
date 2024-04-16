import '@code-hike/mdx/styles';
import './css/global.css';
import './css/custom-ch.css';
import Example from './components/Example/example.mdx';
import BreadcrumbsApp from './components/compoundComponents/index.mdx';

function App() {
  return (
    <article>
      <div>
        <Example />
        <BreadcrumbsApp />
      </div>
    </article>
  );
}

export default App;
