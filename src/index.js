import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import router from "./Router";

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
