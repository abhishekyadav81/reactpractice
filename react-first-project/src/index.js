import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App';
import Counter from './components/Counter'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
