import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing'
import 'antd/dist/antd.css'; 

ReactDOM.render(<BrowserRouter><Routing/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
