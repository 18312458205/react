import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Button, Icon,Menu,Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
