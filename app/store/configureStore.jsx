
import * as redux from 'redux';
import {createStore, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {searchQueryReducer, completedToDoReducer, todosReducer, authReducer}  from 'reducers';

export var configure = (initialState = {}) => {

  var reducer = combineReducers({
    searchquery: searchQueryReducer,
    completedToDo: completedToDoReducer,
    todos: todosReducer,
    auth: authReducer
  });

  var store = createStore(reducer, initialState, compose(
     redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
