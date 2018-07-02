import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const AllApp = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(AllApp, document.getElementById('root'));
