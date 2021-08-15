import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/skyblue.css';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
