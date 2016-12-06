import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Main from 'Main';



ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
  </Route>
</Router>,
  document.getElementById('app')
);
