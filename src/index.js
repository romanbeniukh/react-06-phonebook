import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './redux/containers/AppContainer';
import './sass/index.sass';
import store from './redux/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
