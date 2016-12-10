import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Provider} from 'react-redux';
import actions from 'actions';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import firebase from 'app/firebase/';
import router from 'app/router/';
var store = require('configureStore').configure();


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    alert('enter');
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
