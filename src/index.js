import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CartFooter from './components/CartFooter';
import App from './components/App';
import Nav from './components/Nav';
import * as serviceWorker from './serviceWorker';
 import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render([<Nav />,<App />,<CartFooter/>], document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
