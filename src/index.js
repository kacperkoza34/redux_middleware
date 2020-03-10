import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
      <App />
    </Provider>
  </HttpsRedirect>

  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
