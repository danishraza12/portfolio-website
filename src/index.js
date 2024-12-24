import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reducers from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
