import ReactDOM from 'react-dom/client';
import { App } from './App';

import '@code-hike/mdx/styles';
import '@marigold/theme-core/styles.css';
import './index.css';

const root = document.getElementById('app')!;
ReactDOM.createRoot(root).render(<App />);
