import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Ap from './Ap';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Ap />, document.getElementById('root'));
serviceWorker.unregister();
