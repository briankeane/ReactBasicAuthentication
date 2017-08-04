import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import Header from './components/header';

import App from './components/app';
import Login from './components/auth/login';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);


const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Header />
        <Route path='/' exact={true} component={App} />
        <Route path='/login' component={Login} /> 
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
