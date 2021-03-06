import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js'
import { BrowserRouter as Router } from 'react-router-dom';
console.log(store)


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
