import ReactDOM from 'react-dom/client';
import { App } from './App';

import '@code-hike/mdx/styles';
import './index.css';
import './css/custom-ch.css';

const root = document.getElementById('app')!;
ReactDOM.createRoot(root).render(<App />);
